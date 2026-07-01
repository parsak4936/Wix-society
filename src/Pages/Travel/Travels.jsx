import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { travelData } from "./travelData";

const THEME = "#018367";
// Free vector tiles, no API key, no usage limits (openfreemap.org)
const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";
const HOME = { center: [25, 35], zoom: 1.4 }; // [lng, lat]
const SUPPORTED = ["en", "it", "fa", "ru"];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Brand-green location pin. visited = solid fill, not visited = hollow outline.
const pinSVG = (visited) =>
  visited
    ? `<svg width="26" height="36" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12c0 8.5 10.3 21.3 11.2 22.4.4.5 1.2.5 1.6 0C13.7 33.3 24 20.5 24 12 24 5.4 18.6 0 12 0z" fill="${THEME}" stroke="#fff" stroke-width="1.5"/><circle cx="12" cy="12" r="4.3" fill="#fff"/></svg>`
    : `<svg width="26" height="36" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12c0 8.5 10.3 21.3 11.2 22.4.4.5 1.2.5 1.6 0C13.7 33.3 24 20.5 24 12 24 5.4 18.6 0 12 0z" fill="#fff" stroke="${THEME}" stroke-width="2.2"/><circle cx="12" cy="12" r="4.3" fill="${THEME}"/></svg>`;

const makePinEl = (visited, label) => {
  const el = document.createElement("div");
  el.className = "tw-pin";
  el.title = label;
  el.innerHTML = `<span class="tw-pin-inner">${pinSVG(visited)}</span>`;
  return el;
};

// Switch every label layer to the chosen language (falls back gracefully).
const applyLanguage = (map, lang) => {
  let layers;
  try {
    layers = map.getStyle().layers || [];
  } catch (e) {
    return;
  }
  const field = [
    "coalesce",
    ["get", "name:" + lang],
    ["get", "name:latin"],
    ["get", "name"],
  ];
  layers.forEach((layer) => {
    if (layer.type !== "symbol") return;
    try {
      if (map.getLayoutProperty(layer.id, "text-field") !== undefined) {
        map.setLayoutProperty(layer.id, "text-field", field);
      }
    } catch (e) {
      /* layer without text-field */
    }
  });
};

const Travels = () => {
  const { t, i18n } = useTranslation();
  const lang = SUPPORTED.includes((i18n.language || "en").split("-")[0])
    ? (i18n.language || "en").split("-")[0]
    : "en";

  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const countryMarkersRef = useRef([]);
  const cityMarkersRef = useRef([]);
  const langRef = useRef(lang);
  const [ready, setReady] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const TravelBG = require("../../Assets/backgrounds/TravelBG.webp");

  const totalCountries = travelData.length;
  const visitedCountries = travelData.filter((c) => c.visited).length;
  const visitedPlaces = travelData.reduce(
    (n, c) => n + c.data.cities.filter((ci) => ci.visited).length,
    0
  );

  // init map once
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: STYLE_URL,
      center: HOME.center,
      zoom: HOME.zoom,
      attributionControl: true,
      renderWorldCopies: false, // show a single world, no horizontal repeats
    });
    mapRef.current = map;
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-left");

    map.on("load", () => {
      travelData.forEach((country) => {
        const [lat, lng] = country.coords;
        const el = makePinEl(country.visited, country.name);
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          setSelectedCountry(country);
        });
        const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
          .setLngLat([lng, lat])
          .addTo(map);
        countryMarkersRef.current.push({ marker, el });
      });
      applyLanguage(map, langRef.current);
      setReady(true);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      countryMarkersRef.current = [];
      cityMarkersRef.current = [];
    };
  }, []);

  // react to country selection: show its cities + fly in, or reset to world
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    cityMarkersRef.current.forEach((m) => m.remove());
    cityMarkersRef.current = [];

    if (selectedCountry) {
      countryMarkersRef.current.forEach(({ el }) => (el.style.display = "none"));
      const status = (v) => t(v ? "Visited" : "not Visited");
      selectedCountry.data.cities.forEach((city) => {
        const [lat, lng] = city.coords;
        const el = makePinEl(city.visited, city.name);
        const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
          .setLngLat([lng, lat])
          .setPopup(
            new maplibregl.Popup({ offset: 24 }).setHTML(
              `<strong>${esc(city.name)}</strong><br/>${esc(status(city.visited))}`
            )
          )
          .addTo(map);
        cityMarkersRef.current.push(marker);
      });
      const [lat, lng] = selectedCountry.coords;
      map.flyTo({ center: [lng, lat], zoom: 5, speed: 1.2, essential: true });
    } else {
      countryMarkersRef.current.forEach(({ el }) => (el.style.display = ""));
      map.flyTo({ ...HOME, speed: 1, essential: true });
    }
  }, [selectedCountry, ready, t]);

  // language switch
  useEffect(() => {
    langRef.current = lang;
    const map = mapRef.current;
    if (map && ready) applyLanguage(map, lang);
  }, [lang, ready]);

  return (
    <Container>
      <Section id="section-1" className="section-1">
        <VideoWrapper className="video-wrapper">
          <Overlay className="overlay" />
          <img id="background-video" src={TravelBG} alt="Travel background" />

          <HeaderWrapper>
            <MapWrapper>
              <MapDiv ref={containerRef} />

              {!ready && <MapLoading />}

              <LegendBox>
                <Stat>
                  {visitedCountries}/{totalCountries} {t("countries")} ·{" "}
                  {visitedPlaces} {t("places")}
                </Stat>
                <Row>
                  <SwatchSolid />
                  <span>{t("Visited")}</span>
                </Row>
                <Row>
                  <SwatchHollow />
                  <span>{t("not Visited")}</span>
                </Row>
              </LegendBox>

              {selectedCountry && (
                <ResetButton onClick={() => setSelectedCountry(null)}>
                  ← {t("Reset view")}
                </ResetButton>
              )}
            </MapWrapper>
          </HeaderWrapper>
        </VideoWrapper>
      </Section>
    </Container>
  );
};

export default Travels;

/* ---------- STYLES ---------- */

const Container = styled.div`
  position: relative;
  direction: ltr;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 0%;

  @media (max-width: 450px) {
    padding-bottom: 1%;
  }
`;

const Section = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  flex: 1;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  position: relative;
  margin-top: 90px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 850px) {
    padding: 10px;
  }

  @media (max-width: 450px) {
    padding: 5px;
    margin-bottom: 30%;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 520px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);

  /* pin hover lift (inner element only, so it doesn't fight maplibre's transform) */
  .tw-pin {
    cursor: pointer;
  }
  .tw-pin-inner {
    display: block;
    transition: transform 0.15s ease;
    filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.35));
  }
  .tw-pin:hover .tw-pin-inner {
    transform: scale(1.18);
  }

  /* readable popup (was white-on-white) */
  .maplibregl-popup-content {
    background: #ffffff;
    color: #1c1c1c;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.9rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
  .maplibregl-popup-content strong {
    color: #018367;
  }
  .maplibregl-popup-tip {
    border-top-color: #ffffff !important;
    border-bottom-color: #ffffff !important;
  }
  .maplibregl-popup-close-button {
    color: #1c1c1c;
    font-size: 1.1rem;
    padding: 0 5px;
  }
`;

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const MapLoading = styled.div`
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c0f12;
  &::after {
    content: "";
    width: 42px;
    height: 42px;
    border: 4px solid rgba(1, 131, 103, 0.25);
    border-top-color: #018367;
    border-radius: 50%;
    animation: tw-spin 0.9s linear infinite;
  }
  @keyframes tw-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LegendBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  font-size: 13px;
  color: #333;
`;

const Stat = styled.div`
  font-weight: 700;
  color: ${THEME};
  margin-bottom: 6px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  span {
    color: #333;
  }
`;

const SwatchSolid = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${THEME};
  border: 1.5px solid #fff;
  box-shadow: 0 0 0 1px ${THEME};
  margin-right: 7px;
`;

const SwatchHollow = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid ${THEME};
  margin-right: 7px;
`;

const ResetButton = styled.button`
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 5;
  background: ${THEME};
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: #00a37a;
    transform: translateY(-1px);
  }
`;
