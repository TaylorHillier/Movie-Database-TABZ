import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../components/App.css";
import Nav from "../components/Nav";
import PageAbout from "../pages/PageAbout";
import PagesFavorites from "../pages/PagesFavorites";
import PagesHome from "../pages/PagesHome";
import PagesInfo from "../pages/PagesInfo";
import PagesNowPlaying from "../pages/PagesNowPlaying";
import PagesPopular from "../pages/PagesPopular";
import PagesTopRated from "../pages/PagesTopRated";
import PagesUpcoming from "../pages/PagesUpcoming";

function AppRouter() {

  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav>
        </Nav>
        <Routes>
          <Route path="/" element={<PagesHome />} />
          <Route path="/popular" element={<PagesPopular />} />
          <Route path="/top-rated" element={<PagesTopRated />} />
          <Route path="/now-playing" element={<PagesNowPlaying />} />
          <Route path="/upcoming" element={<PagesUpcoming />} />
          <Route path="/favorites" element={<PagesFavorites />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/movie/:movieId" element={<PagesInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
