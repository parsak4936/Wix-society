import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Archive from "./components/Archive/Archive";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Service/Services";
import Aboutme from "./Pages/AboutMe/Aboutme";
import ArchivePage from "./Pages/Archive/ArchivePage";
import Home from "./Pages/Home";
function App() {
  return (
    <>
     <ScrollUp/>
      {/* {Token=='null' ? <></> ::} */}
      {/* <ScrollTop    className="custom-scrolltop w-4rem h-4rem    border-round-md   bg-primary" icon="pi pi-arrow-up" /> */}
      <BrowserRouter>
      <Routes>
                   
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aboutme" element={<Aboutme/>}/>
                    <Route path="/archive" element={<ArchivePage/>}/>


                    {/* <Route exact path="artist-page" element={<ArtistPage/>}/>
                    <Route exact path="artist-application-form" element={<ArtistApplicationForm/>}/>
                    <Route exact path="nft-details" element={<NFTDetails/>}/>
                    <Route exact path="Commission" element={<Commission/>}/>
                    <Route exact path="login" element={<Login/>}/>
                    <Route exact path="register" element={<Register/>}/>
                    <Route exact path="exhibitor-page" element={<ExhibitorPage/>}/>
                    <Route exact path="exhibition-lists" element={<ExhibitionLists/>}/>
                    <Route exact path="request-lists" element={<RequestLists/>}/>
                    <Route exact path="show-request" element={<ShowRequests/>}/>
                    <Route exact path="request-details" element={<RequestDetails/>}/>
                    <Route exact path="upload-page" element={<NFTUploadPage/>}/>
                    <Route exact path="UserDashboard" element={<UserDashboard/>}/>
                    <Route exact path="profile" element={<ProfilePage/>}/>
                    <Route exact path="collections" element={<ShowCollection/>}/> */}
                </Routes> 
               
                </BrowserRouter>
    </>
  );
}

export default App;
