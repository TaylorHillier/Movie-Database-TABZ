import React from "react";
import { useLocation } from "react-router-dom";
import GeneralAPI from "../api/APIFunctions";
import {BannerSlider, AdditionalSlider} from '../components/Banner'

export default function PageHome() {
  const location = useLocation();

  // Check if the current route is the landing page ("/landingpage")
  const isLandingPage = location.pathname === "/";

  const popularMovies = GeneralAPI('popular');
  const upcomingMovies = GeneralAPI('upcoming');
  const topRatedMovies = GeneralAPI('top_rated');
  const nowPlayingMovies = GeneralAPI('now_playing');
  const twelvemovies = popularMovies.slice(0, 12);

  // Render the Banner component only on the landing page
  if (isLandingPage) {
    return (
      <div className="banner">
        {isLandingPage && (
            <>
            <BannerSlider movies={popularMovies} />
            <p className="main-title">Popular</p> {/* Add the label for Popular */}
            <AdditionalSlider twelvemovies={twelvemovies} />
            <p className="main-title">Upcoming</p> {/* Add the label for Upcoming */}
            <AdditionalSlider twelvemovies={upcomingMovies} />
            <p className="main-title">Top Rated</p> {/* Add the label for Top Rated */}
            <AdditionalSlider twelvemovies={topRatedMovies} />
            <p className="main-title">Now Playing</p> {/* Add the label for Now Playing */}
            <AdditionalSlider twelvemovies={nowPlayingMovies} />
          </>
      
      )}
      </div>
    );
  }

  // Return null for other routes (won't render the Banner component)
  // return null;
}

// export PageHome;
