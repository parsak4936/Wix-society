import styled from "styled-components";
import Header from "../components/Banner/Header";
import ProfComponent from "../components/Banner/ProfComponent";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Services from "../components/Service/Services";
import "./Home.css";
import headervideo from "../Assets/backgrounds/header2.mp4";
import Servicesvideo from "../Assets/backgrounds/services.mp4";
import { useRef } from "react";

function Home() {
  function handlePlay() {
    videoRef.current.playbackRate = 0.7;
  }
  const videoRef = useRef(null);
  return (
    <Container>
      <Banner className="section-1">
        <video
          ref={videoRef}
          id="background-video"
          loop
          autoPlay
          muted
          onPlay={handlePlay}
        >
          <source src={headervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <ProfComponent />
      </Banner>


      <div className="section-2">
      <div className="video-wrapper">

     
      <div className="overlay"></div>
        <video id="background-video-services" loop autoPlay muted>
          <source src={Servicesvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      <Services />
      </div>
      </div>

     
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default Home;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 20%);
`;
