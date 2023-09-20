import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "../context/userState"
import "../components/App.css";
import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// import Banner from "../components/Banner";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesNowPlaying from "../pages/PagesNowPlaying";
import PagesUpcoming from "../pages/PagesUpcoming";
import PagesHome from "../pages/PagesHome";
import PagesFavorites from "../pages/PagesFavorites";
import PageAbout from "../pages/PageAbout";
// import GeneralAPI from "../api/APIFunctionality";
import PageLogin from "../pages/PageLogin";


function AppRouter() {


  return (
    <BrowserRouter>
      <UserProvider>
        <div className="wrapper">
          <Nav>
          </Nav>
          <Routes>
            <Route path="/" element = {<PagesHome/>}></Route>
            <Route path="/popular" element={<PagesPopular />} />
            <Route path="/top-rated" element={<PagesTopRated />} />
            <Route path="/now-playing" element={<PagesNowPlaying />} />
            <Route path="/upcoming" element={<PagesUpcoming />} />
            <Route path="/favorites" element={<PagesFavorites />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/login" element={<PageLogin />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
