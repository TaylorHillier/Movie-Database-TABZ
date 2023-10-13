import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../components/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesUpcoming from "../pages/PagesUpcoming";
import PagesNowPlaying from "../pages/PagesNowPlaying"
import PagesHome from "../pages/PagesHome";
import PageFavorites from "../pages/PageFavorites";
import PageAbout from "../pages/PagesAbout";
import PageLogin from "../pages/PageLogin";
import { UserProvider } from "../context/userState";
import { FavoriteProvider } from "../context/movieState";
import PagesInfo from "../pages/PagesInfo";
import { fetchMovies } from "../api/APIFunctions";
import { loadMovies } from "../features/movies/moviesSlice";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      try {
        const popular = await fetchMovies("popular");
        const upcoming = await fetchMovies("upcoming");
        const topRated = await fetchMovies("top_rated");
        const nowPlaying = await fetchMovies("now_playing");
        // console.log(popular);
        // Actions payload must have a category property and corresponding movies property
        dispatch(loadMovies({ category: "popular", movies: popular }));
        dispatch(loadMovies({ category: "upcoming", movies: upcoming }));
        dispatch(loadMovies({ category: "topRated", movies: topRated }));
        dispatch(loadMovies({ category: "nowPlaying", movies: nowPlaying }));
      } catch (error) {
        console.error(error);
      }
    };
    load();
  });

  const [query, setQuery] = useState('');

  const resetSearch = () => {
    setQuery(''); // Reset the query to an empty string
  };

  return (
    <BrowserRouter>
      <div className="h-screen w-full text-gray-50">
        <UserProvider>
          <FavoriteProvider>
            <div className="wrapper">
              <Header />
              <SearchBar resetSearch={resetSearch} />
              <main className='px-5' >
                <Routes>
                  <Route path="/" element={<PagesHome />}></Route>
                  <Route path="/popular" element={<PagesPopular />} />
                  <Route path="/top-rated" element={<PagesTopRated />} />
                  <Route path="/now-playing" element={<PagesNowPlaying />} />
                  <Route path="/upcoming" element={<PagesUpcoming />} />
                  <Route path="/favorites" element={<PageFavorites />} />
                  <Route path="/about" element={<PageAbout />} />
                  <Route path="/movie/:movieId" element={<PagesInfo />} />
                  <Route path="/login" element={<PageLogin />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </FavoriteProvider>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
