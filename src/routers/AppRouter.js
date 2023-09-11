import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesNowPlaying from "../pages/PagesNowPlaying";
import PagesUpcoming from "../pages/PagesUpcoming";
import PagesFavorites from "../pages/PagesFavorites";
import {accessToken, apiKey} from "../api/APIVariables";

function AppRouter() {
  const [movie, setMovie] = useState('');
  const [picture, setPicture] = useState()
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
  .then(response => response.json())
  .then(response => setMovie(response.results[0].title + ' ' + response.results[0].overview))
  .then(response => console.log("This is movie", movie))
  // .then(response => console.log(response))
  .catch(err => console.error(err));
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <h2>{movie}</h2>
        <Nav>
        <Routes>
          <Route path="/popular" element={<PagesPopular />} />
          <Route path="/top-rated" element={<PagesTopRated />} />
          <Route path="/now-playing" element={<PagesNowPlaying />} />
          <Route path="/upcoming" element={<PagesUpcoming />} />
          <Route path="/favorites" element={<PagesFavorites />} />
        </Routes>
        </Nav>
        <Banner />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
