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
import PagesFavorites from "../pages/PagesFavorites";
import PagesAbout from "../pages/PagesAbout";
import PagesInfo from "../pages/PagesInfo";
import { fetchMovies } from "../api/APIFunctions";
import { loadMovies } from "../features/movies/moviesSlice";

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
                dispatch(loadMovies({category:"popular", movies: popular}));
                dispatch(loadMovies({category:"upcoming", movies: upcoming}));
                dispatch(loadMovies({category:"topRated", movies: topRated}));
                dispatch(loadMovies({category:"nowPlaying", movies: nowPlaying}));
            } catch (error) {
                console.error(error);
            }
        };
        load();
    });

  return (
      <BrowserRouter>
          <div className="h-screen w-full text-gray-50">
              <Header />
              <main className="">
                  <Routes>
                      <Route path="/" element={<PagesHome />} />
                      <Route path="/popular" element={<PagesPopular />} />
                      <Route path="/top-rated" element={<PagesTopRated />} />
                      <Route path="/now-playing" element={<PagesNowPlaying />} />
                      <Route path="/upcoming" element={<PagesUpcoming />} />
                      <Route path="/favorites" element={<PagesFavorites />} />
                      <Route path="/about" element={<PagesAbout />} />
                      <Route path="/movie/:movieId" element={<PagesInfo />} />
                  </Routes>
              </main>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default AppRouter;
