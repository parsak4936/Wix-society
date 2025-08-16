import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { travelData } from "./travelData";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
const MapZoomManager = ({
  setSelectedCountry,
  setSelectedCity,
  selectedCountry,
  selectedCity,
}) => {
  const map = useMapEvents({
    zoomend: () => {
      const currentZoom = map.getZoom();

      if (currentZoom < 5) {
        setSelectedCountry(null);
        setSelectedCity(null);
      } else if (currentZoom >= 5 && currentZoom < 11) {
        setSelectedCity(null);
        setSelectedCountry(selectedCountry);
      } else if (currentZoom >= 11) {
        setSelectedCountry(selectedCountry);
        setSelectedCity(selectedCity);
      }

      if (currentZoom >= 5 && currentZoom < 11 && selectedCity) {
        setSelectedCity(null);
        setSelectedCountry(selectedCountry);
      }
    },
  });

  useEffect(() => {
    if (selectedCountry && !selectedCity) {
      map.setView(selectedCountry.coords, 6);
    } else if (selectedCity) {
      map.setView(selectedCity.coords, 12);
    }
  }, [selectedCountry, selectedCity, map]);

  return null;
};

const MapWithMarkers = ({
  t,
  selectedCountry,
  selectedCity,
  setSelectedCountry,
  setSelectedCity,
}) => {
  const handleCountryClick = (country, map) => {
    setSelectedCountry(country);
    map.setView(country.coords, 6);
    console.log("country clicked");
  };

  const handleCityClick = (city, map) => {
    setSelectedCity(city);
    map.setView(city.coords, 12);
    console.log("City clicked");
  };

  return (
    <>
      {!selectedCity &&
        !selectedCountry &&
        travelData.map((country, index) => (
          <Marker
            key={index}
            position={country.coords}
            eventHandlers={{
              click: (e) => handleCountryClick(country, e.target._map),
            }}
            icon={L.divIcon({
              className: "",
              html: `<div style="display: flex; align-items: center; justify-content: center;">
                   <div style="margin-left: 5px; background-color: ${
                     country.visited ? "rgba(0, 128, 0,1)" : "rgba(128, 128, 128, 0.6)"
                   }; padding: 5px 15px; color: ${
                country.visited ? "white" : "black"
              }; border-radius: 5px; font-size: 12px;">
                     ${country.name}
                   </div>
                 </div>`,
            })}
          >
            <Popup>
              {country.name} - {country.visited ? "Visited" : "Not Visited"}
            </Popup>
          </Marker>
        ))}

      {selectedCountry &&
        selectedCountry.data.cities.map((city, index) => (
          <Marker
            key={index}
            position={city.coords}
            eventHandlers={{
              click: (e) => handleCityClick(city, e.target._map),
            }}
            icon={L.divIcon({
              className: "",
              html: `<div style="display: flex; align-items: center; justify-content: center;">
                     <div style="margin-left: 5px; background-color: ${
                       city.visited ? "green" : "grey"
                     }; padding: ${city.visited ? "5px 5px" : "3px 3px"}; color: ${
                city.visited ? "white" : "black"
              }; border-radius: 5px; font-size: ${
                city.visited ? "12px" : "10px"
              }">
                       ${city.name}
                     </div>
                   </div>`,
            })}
          >
            <Popup>
              {city.name} - {city.visited ? "Visited" : "Not Visited"}
            </Popup>
          </Marker>
        ))}
    </>
  );
};
const Legend = () => {
  const { t } = useTranslation();

  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px', zIndex: 1000 }}>
      <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#333' }}>{t('legend')}</h4>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ width: '15px', height: '15px', backgroundColor: 'rgba(0, 128, 0, 1)', marginRight: '5px' }}></div>
        <span style={{ color: '#333' }}>{t('Visited')}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '15px', height: '15px', backgroundColor: 'rgba(128, 128, 128, 0.6)', marginRight: '5px' }}></div>
        <span style={{ color: '#333' }}>{t('not Visited')}  </span>
      </div>
    </div>
  );
};
const Travels = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const minZoomLevel = 4;
  const maxZoomLevel = 18;
  const TravelBG = require("../../Assets/backgrounds/TravelBG.webp");

  return (
    <Container>
      <Section id="section-1" className="section-1">
        <VideoWrapper className="video-wrapper">
          <Overlay className="overlay"></Overlay>
          <img id="background-video" src={TravelBG} alt="Travel background" />

          <HeaderWrapper>
            <MapWrapper>
              <MapContainer
                center={[44, 30]}
                zoom={2}
                style={{ height: "500px", width: "100%" }}
                minZoom={minZoomLevel}
                maxZoom={maxZoomLevel}
                maxBounds={[[-85, -180], [85, 180]]}
                worldCopyJump={true}
                zoomSnap={0.8}
                zoomDelta={1}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <MapZoomManager
                  setSelectedCountry={setSelectedCountry}
                  setSelectedCity={setSelectedCity}
                  selectedCountry={selectedCountry}
                  selectedCity={selectedCity}
                />
                <MapWithMarkers
                  t={t}
                  selectedCountry={selectedCountry}
                  selectedCity={selectedCity}
                  setSelectedCountry={setSelectedCountry}
                  setSelectedCity={setSelectedCity}
                />
                
              </MapContainer>
               <Legend />
            </MapWrapper>
         
          </HeaderWrapper>
        </VideoWrapper>
      </Section>
    </Container>
  );
};

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

  h1 {
    color: #fff;
    font-size: 2rem;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  height: 500px;
`;

export default Travels;