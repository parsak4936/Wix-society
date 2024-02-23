import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Aboutme from "./Pages/AboutMe/Aboutme";
// import ArchivePage from "./Pages/Archive/ArchivePage";
import Home from "./Pages/Home";
// import Song from "./Assets/backgroundmusic.mp3";
// import AudioPlayer from "./components/MusicPlayer/AudioPlayer";

function App() {
  // const volume = 0.2; // Adjust the volume (0.0 to 1.0)

  return (
    <>
      <ScrollUp />
      {/* <AudioPlayer src={Song} volume={volume} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/aboutme" element={<Aboutme />} />
            {/* <Route path="/archive" element={<ArchivePage />} />    */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
