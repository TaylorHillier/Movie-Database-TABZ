import React from "react";
import { useLocation } from "react-router-dom";
import { BannerSlider} from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import fetchMovies from "../api/APIFunctions";

export default function PageHome() {
    const location = useLocation();

    // Check if the current route is the landing page ("/landingpage")
    const isLandingPage = location.pathname === "/";

    const popularMovies = fetchMovies("popular");
    const upcomingMovies = fetchMovies("upcoming");
    const topRatedMovies = fetchMovies("top_rated");
    const nowPlayingMovies = fetchMovies("now_playing");
    const twelvemovies = popularMovies.slice(0, 12);

    // Render the Banner component only on the landing page
    if (isLandingPage) {
        return (
            <div className="banner">
                {isLandingPage && (
                    <>
                        <BannerSlider movies={popularMovies} />
                        <section>
                            <h2 className="main-title">Popular</h2>{" "}
                            {/* Add the label for Popular */}
                            <CategorySlider twelvemovies={twelvemovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Upcoming</h2>{" "}
                            {/* Add the label for Upcoming */}
                            <CategorySlider twelvemovies={upcomingMovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Top Rated</h2>{" "}
                            {/* Add the label for Top Rated */}
                            <CategorySlider twelvemovies={topRatedMovies} />
                        </section>
                        <section>
                            <h2 className="main-title">Now Playing</h2>{" "}
                            {/* Add the label for Now Playing */}
                            <CategorySlider twelvemovies={nowPlayingMovies} />
                        </section>
                    </>
                )}
            </div>
        );
    }

    // Return null for other routes (won't render the Banner component)
    // return null;
}

// export PageHome;
