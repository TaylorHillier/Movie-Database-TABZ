import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../components/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesNowPlaying from "../pages/PagesNowPlaying";
import PagesUpcoming from "../pages/PagesUpcoming";
import PagesHome from "../pages/PagesHome";
import PagesFavorites from "../pages/PagesFavorites";
import PagesAbout from "../pages/PagesAbout";

function AppRouter() {

  
  return (
    <BrowserRouter>
      <div className="wrapper w-full">
        <Header/>
          <main>
        <Routes>
          <Route path="/" element={<PagesHome />} />
          <Route path="/popular" element={<PagesPopular />} />
          <Route path="/top-rated" element={<PagesTopRated />} />
          <Route path="/now-playing" element={<PagesNowPlaying />} />
          <Route path="/upcoming" element={<PagesUpcoming />} />
          <Route path="/favorites" element={<PagesFavorites />} />
          <Route path="/about" element={<PagesAbout />} />
        </Routes>
          </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
