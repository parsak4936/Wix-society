import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// مثال یک کشور جداگانه
import italyData from './Data/italy'; // فایل حاوی اطلاعات ایتالیا

const countries = [
  {
    name: 'Italy',
    coords: [41.8719, 12.5674],
    data: {
      cities: [
        {
          name: 'Florence',
          coords: [43.7696, 11.2558],
          visited: false,
          places: [
            { name: 'Uffizi Gallery', coords: [43.7687, 11.2556], visited: false, description: '' },  // استرینگ خالی
          ],
        },
        {
          name: 'Milan',
          coords: [45.4642, 9.1900],
          visited: false,
          places: [
            { name: 'Duomo di Milano', coords: [45.4642, 9.1910], visited: false, description: '' },  // استرینگ خالی
          ],
        },
        {
          name: 'Palermo',
          coords: [38.1157, 13.3615],
          visited: false,
          places: [
            { name: 'Palermo Cathedral', coords: [38.1157, 13.3624], visited: false, description: '' },  // استرینگ خالی
          ],
        },
        {
          name: 'Taormina',
          coords: [37.8516, 15.2850],
          visited: false,
          places: [
            { name: 'Ancient Theatre of Taormina', coords: [37.8505, 15.2848], visited: false, description: '' },  // استرینگ خالی
          ],
        },
      ],
    },
  },
  {
    name: 'Spain',
    coords: [40.4637, -3.7492],
    data: {
      cities: [
        {
          name: 'Barcelona',
          coords: [41.3851, 2.1734],
          visited: false,
          places: [
            { name: 'Sagrada Família', coords: [41.4036, 2.1744], visited: false, description: '' },  // استرینگ خالی
          ],
        },
        {
          name: 'Madrid',
          coords: [40.4168, -3.7038],
          visited: false,
          places: [
            { name: 'Royal Palace', coords: [40.4170, -3.7143], visited: false, description: '' },  // استرینگ خالی
          ],
        },
      ],
    },
  },
  {
    name: 'United States',
    coords: [37.0902, -95.7129],
    data: {
      cities: [
        {
          name: 'New York City',
          coords: [40.7128, -74.0060],
          visited: false,
          places: [
            { name: 'Statue of Liberty', coords: [40.6892, -74.0445], visited: false, description: '' },  // استرینگ خالی
          ],
        },
        {
          name: 'Los Angeles',
          coords: [34.0522, -118.2437],
          visited: false,
          places: [
            { name: 'Hollywood Sign', coords: [34.1341, -118.3215], visited: false, description: '' },  // استرینگ خالی
          ],
        },
      ],
    },
  },
  {
    name: 'Poland',
    coords: [51.9194, 19.1451],
    data: {
      cities: [
        {
          name: 'Warsaw',
          coords: [52.2297, 21.0122],
          visited: false,
          places: [
            { name: 'Old Town', coords: [52.2299, 21.0118], visited: false, description: '' },  // استرینگ خالی
          ],
        },
      ],
    },
  },
  {
    name: 'Volcano Island',
    coords: [38.4040, 14.9628],
    data: {
      cities: [
        {
          name: 'Volcano Island',
          coords: [38.4040, 14.9628],
          visited: false,
          places: [
            { name: 'Mount Etna', coords: [37.7510, 14.9934], visited: false, description: '' },  // استرینگ خالی
          ],
        },
      ],
    },
  },
];


const MapZoomManager = ({ setSelectedCountry, setSelectedCity, selectedCountry, selectedCity }) => {
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

const Travels = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null); // مکان فعلی

  const minZoomLevel = 2; 
  const maxZoomLevel = 18; 

  const handleCountryClick = (country, map) => {
    setSelectedCountry(country);
    setSelectedCity(null);
    setShowModal(false); // بستن مودال
    map.setView(country.coords, Math.max(map.getZoom(), 6));
  };

  const handleCityClick = (city, map) => {
    setSelectedCity(city);
    setCurrentLocation(city); // تنظیم مکان فعلی برای نمایش مودال
    setShowModal(true); // نمایش مودال
    map.setView(city.coords, Math.max(map.getZoom(), 12));
  };
  const MapWithMarkers = () => {
    const map = useMap();

    return (
      <>
        {!selectedCountry && !selectedCity && countries.map((country, index) => (
          <Marker  
            key={index} 
            position={country.coords}
            eventHandlers={{
              click: () => handleCountryClick(country, map),
            }}
            icon={L.divIcon({
              className: '',
              html: `<div style="display: flex; align-items: center; justify-content: center;">
                        <div style="width: 20px; height: 20px; animation: wave1 3s infinite alternate, wave2 4s infinite alternate; background-color: transparent;">
                          🌍
                        </div>
                      </div>`,
            })}
            level="country"
          >
            <Popup>{t(country.name)}</Popup>
          </Marker>
        ))}
        {/* نمایش پین شهرها در صورت انتخاب کشور */}
        {selectedCountry && !selectedCity && selectedCountry.data.cities.map((city, index) => (
          <Marker 
            key={index} 
            position={city.coords}
            eventHandlers={{
              click: () => handleCityClick(city, map),
            }}
            icon={L.divIcon({
              className: '',
              html: `<div style="width: 15px; height: 15px; background-color: ${city.visited ? 'green' : 'yellow'}; border-radius: 50%;"></div>`,
            })}
            level="city"
          >
            <Popup>{t(city.name)} - {t(city.visited ? 'Visited' : 'Not Visited')}</Popup>
          </Marker>
        ))}
        {/* نمایش پین مکان‌های خاص در صورت انتخاب شهر */}
        {selectedCity && selectedCity.places.map((place, index) => (
          <Marker 
            key={index} 
            position={place.coords}
            icon={L.divIcon({
              className: '',
              html: `<div style="width: 10px; height: 10px; background-color: ${place.visited ? 'green' : 'yellow'}; border-radius: 50%;"></div>`,
            })}
            level="place"
          >
            <Popup>{t(place.name)} - {t(place.visited ? 'Visited' : 'Not Visited')}</Popup>
          </Marker>
        ))}
      </>
    );
  };

  return (
    <Container>
      <Section id="section-1" className="section-1">
        <VideoWrapper className="video-wrapper">
          <Overlay className="overlay"></Overlay>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            onEnded={(e) => e.target.play()}
          >
            {t('Your browser does not support the video tag.')}
          </video>
          <HeaderWrapper>
            <h1>{t('My Travels')}</h1>
            <Description>
              <p>{t('Here is a map showing the places I have visited around the world. Each marker represents a location I have traveled to. Click on a marker to see more details.')}</p>
            </Description>
          </HeaderWrapper>
        </VideoWrapper>
        <MapWrapper>
          <MapContainer 
            center={[20, 0]} 
            zoom={minZoomLevel} 
            style={{ height: '500px', width: '100%' }} 
            minZoom={minZoomLevel} 
            maxZoom={maxZoomLevel}
            zoomSnap={0.8}  // فعال کردن زوم پیوسته
            zoomDelta={1}  // کنترل دقیق زوم
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution={t('&copy; OpenStreetMap contributors & CartoDB')}
            />
            <MapZoomManager
              setSelectedCountry={setSelectedCountry}
              setSelectedCity={setSelectedCity}
              selectedCountry={selectedCountry}
              selectedCity={selectedCity}
            />
            <MapWithMarkers />
          </MapContainer>
        </MapWrapper>
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
  background-color: #121212; /* پس زمینه تیره‌تر برای هماهنگی با نقشه */

  @media (max-width: 450px) {
    padding-bottom: 1%;
  }
  z-index: 0 !important; /* Ensure this is higher than any other element */
`;

const Section = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 50vh;
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

const Description = styled.div`
  max-width: 800px;
  margin-bottom: 20px;
  text-align: center;

  p {
    color: #ccc;
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const MapWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* برای سنتر کردن افقی */
  align-items: center;     /* برای سنتر کردن عمودی */
  width: 100%;
  height: 100%;
  margin: 0 auto; /* اگر می‌خواهی فاصله‌ای در چپ و راست نباشد */
  max-width: 1000px; /* عرض مپ را مشخص می‌کند */
  height: 500px; /* ارتفاع ثابت */
`;


export default Travels;
