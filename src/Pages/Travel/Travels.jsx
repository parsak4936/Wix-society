import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import wishlistICON from "../../Assets/Icons/wishlist.webp";
import visitedICON from "../../Assets/Icons/visited.webp";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
const travelData = [
  {
    name: "Italy",
    visited: true,
    coords: [41.8719, 12.5674],
    data: {
      cities: [
        {
          name: "Rome",
          coords: [41.9028, 12.4964],
          visited: true,
        },
        {
          name: "Taormina",
          coords: [37.85, 15.2833],
          visited: true,
        },
        {
          name: "Messina",
          coords: [38.1938, 15.552],
          visited: true,
        },
        {
          name: "Bronte",
          coords: [37.8667, 14.9833],
          visited: true,
        },
        {
          name: "Pietro Niceto",
          coords: [38.1533, 15.1761],
          visited: true,
        },
        {
          name: "Pace del Male",
          coords: [38.1736, 15.1783],
          visited: true,
        },
        {
          name: "Cefalù",
          coords: [38.0375, 14.0247],
          visited: true,
        },
        {
          name: "Calabria",
          coords: [38.1157, 15.55],
          visited: true,
        },
        {
          name: "Milazzo",
          coords: [38.2119, 15.2431],
          visited: true,
        },
        {
          name: "Etna",
          coords: [37.7515, 15.0047],
          visited: true,
        },
        {
          name: "Bologna",
          coords: [44.4937, 11.3426],
          visited: true,
        },
        {
          name: "Venice",
          coords: [45.4408, 12.3155],
          visited: true,
        },
        {
          name: "Florence",
          coords: [43.7696, 11.2558],
          visited: true,
        },
        {
          name: "Naples",
          coords: [40.8522, 14.2681],
          visited: true,
        },
        {
          name: "Vulcano Island",
          coords: [38.4056, 15.2114],
          visited: true,
        },
        {
          name: "Milan",
          coords: [45.4642, 9.19],
          visited: false,
        },
        {
          name: "Palermo",
          coords: [38.1157, 13.3615],
          visited: false,
        },

        {
          name: "Pisa",
          coords: [43.7167, 10.4],
          visited: false,
        },
        {
          name: "Viterbo",
          coords: [42.4167, 12.1],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Saudi Arabia",
    visited: true,

    coords: [23.8859, 45.0792],
    data: {
      cities: [
        {
          name: "Mecca",
          coords: [21.4225, 39.8262],
          visited: true,
        },
        {
          name: "Medina",
          coords: [24.5247, 39.5692],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Iraq",
    visited: true,

    coords: [33.2232, 43.6793],
    data: {
      cities: [
        {
          name: "Baghdad",
          coords: [33.3152, 44.3661],
          visited: true,
        },
        {
          name: "Karbala",
          coords: [32.6019, 44.0187],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Turkey",
    visited: true,

    coords: [38.9637, 35.2433],
    data: {
      cities: [
        {
          name: "Unknown Cities",
          coords: [38.9637, 35.2433],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Iran",
    visited: true,

    coords: [32.4279, 53.688],
    data: {
      cities: [
        {
          name: "Kashan",
          coords: [33.9907, 51.5041],
          visited: true,
        },
        {
          name: "Anzali",
          coords: [37.4712, 49.4579],
          visited: true,
        },
        {
          name: "Astara",
          coords: [38.4275, 48.8594],
          visited: true,
        },
        {
          name: "Zibakenar",
          coords: [37.3147, 49.6567],
          visited: true,
        },
        {
          name: "Mashhad",
          coords: [36.2605, 59.6168],
          visited: true,
        },
        {
          name: "Zanjan",
          coords: [36.6699, 48.4754],
          visited: true,
        },
        {
          name: "Urmia",
          coords: [37.5531, 45.0702],
          visited: true,
        },
        {
          name: "Tabriz",
          coords: [38.0962, 46.2904],
          visited: true,
        },
        {
          name: "Qazvin",
          coords: [36.2806, 50.0031],
          visited: true,
        },
        {
          name: "Miyaneh",
          coords: [37.4387, 47.7152],
          visited: true,
        },
        {
          name: "Ardabil",
          coords: [38.2478, 48.2956],
          visited: true,
        },
        {
          name: "Osku",
          coords: [38.3131, 47.4967],
          visited: true,
        },
        {
          name: "Kandovan",
          coords: [37.5811, 47.3897],
          visited: true,
        },
        {
          name: "Damash",
          coords: [37.1494, 49.0531],
          visited: true,
        },
        {
          name: "Gorg Darreh",
          coords: [37.4744, 49.0431],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Syria",
    visited: true,

    coords: [34.8021, 38.9968],
    data: {
      cities: [
        {
          name: "Damascus",
          coords: [33.5138, 36.2765],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Lebanon",
    visited: true,

    coords: [33.8547, 35.8623],
    data: {
      cities: [
        {
          name: "Beirut",
          coords: [33.8886, 35.4955],
          visited: true,
        },
      ],
    },
  },
  {
    name: "Finland",
    visited: false,

    coords: [61.9241, 25.7482],
    data: {
      cities: [
        {
          name: "Lapland",
          coords: [66.5863, 25.0717],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Canada",
    visited: false,

    coords: [56.1304, -106.3468],
    data: {
      cities: [
        {
          name: "Capilano Suspension Bridge Park",
          coords: [49.3434, -123.1142],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Belgium",
    visited: false,

    coords: [50.8503, 4.3517],
    data: {
      cities: [
        {
          name: "Groot Begijnhof, Leuven",
          coords: [50.8788, 4.6999],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Scotland",
    visited: false,

    coords: [56.4907, -4.2026],
    data: {
      cities: [
        {
          name: "Loch Ness",
          coords: [57.3229, -4.4244],
          visited: false,
        },
        {
          name: "Eilean Donan Castle",
          coords: [57.2395, -5.5167],
          visited: false,
        },
      ],
    },
  },

  {
    name: "Spain",
    visited: false,
    coords: [40.4637, -3.7492],
    data: {
      cities: [
        {
          name: "Barcelona",
          coords: [41.3784, 2.1925],
          visited: false,
        },
        {
          name: "Madrid",
          coords: [40.4168, -3.7038],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Malta",
    visited: false,
    coords: [35.9375, 14.3754],
    data: {
      cities: [
        {
          name: "Malta",
          coords: [35.9375, 14.3754],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Portugal",
    visited: false,
    coords: [39.3999, -8.2245],
    data: {
      cities: [
        {
          name: "Sintra",
          coords: [38.8027, -9.3815],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Romania",
    visited: false,
    coords: [45.9432, 24.9668],
    data: {
      cities: [
        {
          name: "Transylvania",
          coords: [45.7909, 23.9672],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Moldova",
    visited: false,
    coords: [47.0105, 28.8638],
    data: {
      cities: [
        {
          name: "Moldova",
          coords: [47.0105, 28.8638],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Sweden",
    visited: false,
    coords: [60.1282, 18.6435],
    data: {
      cities: [
        {
          name: "Sweden",
          coords: [60.1282, 18.6435],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Georgia",
    visited: false,
    coords: [42.3154, 43.3569],
    data: {
      cities: [
        {
          name: "Georgia",
          coords: [42.3154, 43.3569],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Finland",
    visited: false,
    coords: [61.9241, 25.7482],
    data: {
      cities: [
        {
          name: "Lapland",
          coords: [66.5863, 25.0717],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Switzerland",
    visited: false,
    coords: [46.8182, 8.2275],
    data: {
      cities: [
        {
          name: "Zurich",
          coords: [47.3769, 8.5417],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Canada",
    visited: false,
    coords: [56.1304, -106.3468],
    data: {
      cities: [
        {
          name: "Capilano Suspension Bridge Park",
          coords: [49.3434, -123.1142],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Belgium",
    visited: false,
    coords: [50.8503, 4.3517],
    data: {
      cities: [
        {
          name: "Groot Begijnhof, Leuven",
          coords: [50.8788, 4.6999],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Scotland",
    visited: false,
    coords: [56.4907, -4.2026],
    data: {
      cities: [
        {
          name: "Loch Ness",
          coords: [57.3229, -4.4244],
          visited: false,
        },
        {
          name: "Eilean Donan Castle",
          coords: [57.2395, -5.5167],
          visited: false,
        },
      ],
    },
  },
  {
    name: "United States",
    visited: false,
    coords: [37.0902, -95.7129],
    data: {
      cities: [
        {
          name: "New York City",
          coords: [40.7128, -74.006],
          visited: false,
        },
        {
          name: "Grand Canyon",
          coords: [36.1069, -112.1129],
          visited: false,
        },
        {
          name: "Yellowstone National Park",
          coords: [44.428, -110.5885],
          visited: false,
        },
        {
          name: "San Francisco",
          coords: [37.7749, -122.4194],
          visited: false,
        },
        {
          name: "Los Angeles",
          coords: [34.0522, -118.2437],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Russia",
    visited: false,
    coords: [61.524, 105.3188],
    data: {
      cities: [
        {
          name: "Moscow",
          coords: [55.7558, 37.6173],
          visited: false,
        },
        {
          name: "Saint Petersburg",
          coords: [59.9343, 30.3351],
          visited: false,
        },
        {
          name: "Lake Baikal",
          coords: [53.5587, 108.165],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Kazakhstan",
    visited: false,
    coords: [48.0196, 66.9237],
    data: {
      cities: [
        {
          name: "Astana",
          coords: [51.1694, 71.4491],
          visited: false,
        },
        {
          name: "Almaty",
          coords: [43.222, 76.8512],
          visited: false,
        },
        {
          name: "Charyn Canyon",
          coords: [43.353, 79.0681],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Jordan",
    visited: false,
    coords: [30.5852, 36.2384],
    data: {
      cities: [
        {
          name: "Petra",
          coords: [30.3285, 35.4444],
          visited: false,
        },
        {
          name: "Amman",
          coords: [31.9454, 35.9284],
          visited: false,
        },
        {
          name: "Wadi Rum",
          coords: [29.5328, 35.4192],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Egypt",
    visited: false,
    coords: [26.8206, 30.8025],
    data: {
      cities: [
        {
          name: "Cairo",
          coords: [30.0444, 31.2357],
          visited: false,
        },
        {
          name: "Giza Pyramids",
          coords: [29.9792, 31.1342],
          visited: false,
        },
        {
          name: "Luxor",
          coords: [25.6872, 32.6396],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Japan",
    visited: false,
    coords: [36.2048, 138.2529],
    data: {
      cities: [
        {
          name: "Tokyo",
          coords: [35.6895, 139.6917],
          visited: false,
        },
        {
          name: "Kyoto",
          coords: [35.0116, 135.7681],
          visited: false,
        },
        {
          name: "Mount Fuji",
          coords: [35.3606, 138.7274],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Indonesia",
    visited: false,
    coords: [-0.7893, 113.9213],
    data: {
      cities: [
        {
          name: "Bali",
          coords: [-8.3405, 115.092],
          visited: false,
        },
        {
          name: "Jakarta",
          coords: [-6.2088, 106.8456],
          visited: false,
        },
        {
          name: "Komodo Island",
          coords: [-8.55, 119.4833],
          visited: false,
        },
      ],
    },
  },
  {
    name: "France",
    visited: false,
    coords: [46.6034, 1.8883],
    data: {
      cities: [
        {
          name: "Paris",
          coords: [48.8566, 2.3522],
          visited: false,
        },
        {
          name: "Mont Saint-Michel",
          coords: [48.6361, -1.5115],
          visited: false,
        },
        {
          name: "Nice",
          coords: [43.7102, 7.262],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Germany",
    visited: false,
    coords: [51.1657, 10.4515],
    data: {
      cities: [
        {
          name: "Berlin",
          coords: [52.52, 13.405],
          visited: false,
        },
        {
          name: "Munich",
          coords: [48.1351, 11.582],
          visited: false,
        },
        {
          name: "Neuschwanstein Castle",
          coords: [47.5576, 10.7498],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Poland",
    visited: false,
    coords: [51.9194, 19.1451],
    data: {
      cities: [
        {
          name: "Warsaw",
          coords: [52.2298, 21.0122],
          visited: false,
        },
        {
          name: "Gdańsk",
          coords: [54.352, 18.6466],
          visited: false,
        },
        {
          name: "Kraków",
          coords: [50.0647, 19.945],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Greece",
    visited: false,
    coords: [39.0742, 21.8243],
    data: {
      cities: [
        {
          name: "Athens",
          coords: [37.9838, 23.7275],
          visited: false,
        },
        {
          name: "Santorini",
          coords: [36.3932, 25.4615],
          visited: false,
        },
        {
          name: "Meteora",
          coords: [39.721, 21.6302],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Serbia",
    visited: false,
    coords: [44.0165, 21.0059],
    data: {
      cities: [
        {
          name: "Belgrade",
          coords: [44.7866, 20.4489],
          visited: false,
        },
        {
          name: "Novi Sad",
          coords: [45.2671, 19.8335],
          visited: false,
        },
        {
          name: "Niš",
          coords: [43.3216, 21.8954],
          visited: false,
        },
      ],
    },
  },
  {
    name: "Hungary",
    visited: false,
    coords: [47.1625, 19.5033],
    data: {
      cities: [
        {
          name: "Budapest",
          coords: [47.4979, 19.0402],
          visited: false,
        },
        {
          name: "Lake Balaton",
          coords: [46.8333, 17.7333],
          visited: false,
        },
        {
          name: "Eger",
          coords: [47.9025, 20.3776],
          visited: false,
        },
      ],
    },
  },
];

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
        // وقتی زوم کمتر از 5 باشد، هیچ کشوری یا شهری انتخاب نمی‌شود
        setSelectedCountry(null);
        setSelectedCity(null);
      } else if (currentZoom >= 5 && currentZoom < 11) {
        // وقتی زوم بین 5 تا 11 باشد، پین کشور نمایش داده می‌شود
        setSelectedCity(null); // پین شهر مخفی می‌شود
        setSelectedCountry(selectedCountry); // فقط کشور نمایش داده می‌شود
      } else if (currentZoom >= 11) {
        // وقتی زوم بیشتر از 11 باشد، پین شهر نمایش داده می‌شود
        setSelectedCountry(selectedCountry); // پین کشور مخفی می‌شود
        setSelectedCity(selectedCity); // فقط پین شهر نمایش داده می‌شود
      }

      // در صورتی که سطح زوم به کمتر از 11 تغییر کرد و شهرها در حال نمایش بودند،
      // باید پین‌های کشور جایگزین پین‌های شهر شوند.
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
    map.setView(country.coords, 6); // zoom to country
    console.log("country clicked");
  };

  const handleCityClick = (city, map) => {
    setSelectedCity(city);
    map.setView(city.coords, 12); // zoom to city
    console.log("City clicked");
  };

  return (
    <>
      {/* Show country pins */}
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
                     country.visited ? "green" : "yellow"
                   }; padding: 5px 15px; color: ${
                country.visited ? "white" : "black"
              }; border-radius: 5px; font-weight: bold;">
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

      {/* Show city pins */}
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
                       city.visited ? "green" : "yellow"
                     }; padding: 5px 15px; color: ${
                city.visited ? "white" : "black"
              }; border-radius: 5px; font-weight: bold;">
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

const Travels = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const minZoomLevel = 2;
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
                center={[20, 0]}
                zoom={minZoomLevel}
                style={{ height: "500px", width: "100%" }}
                minZoom={minZoomLevel}
                maxZoom={maxZoomLevel}
                maxBounds={[
                  [-85, -180],
                  [85, 180],
                ]} // محدوده قابل پیمایش را تنظیم کنید
                worldCopyJump={true} // جلوگیری از کپی نقشه در هنگام رسیدن به مرزها
                zoomSnap={0.8} // فعال کردن زوم پیوسته
                zoomDelta={1} // کنترل دقیق زوم
              >
                <TileLayer
                  url="
 
                  https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

                  "
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
            </MapWrapper>
          </HeaderWrapper>
        </VideoWrapper>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
    direction: ltr; /* اضافه کردن direction: ltr */

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 0%; /* Default padding for larger screens */

  @media (max-width: 450px) {
    padding-bottom: 1%; /* Increased padding for phone screens */
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
  justify-content: center; /* برای سنتر کردن افقی */
  align-items: center; /* برای سنتر کردن عمودی */
  width: 100%;
  height: 100%;
  margin: 0 auto; /* اگر می‌خواهی فاصله‌ای در چپ و راست نباشد */
  max-width: 1000px; /* عرض مپ را مشخص می‌کند */
  height: 500px; /* ارتفاع ثابت */
`;

export default Travels;
