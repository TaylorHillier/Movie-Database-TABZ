import { useLocation } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./App.css";
import PopAPI from "../api/APIFunctionality";
import { Pagination, Autoplay, Navigation } from "swiper/modules";


function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  } else {
    const truncatedText = words.slice(0, maxWords).join(" ");
    return truncatedText + " ...";
  }
}

function BannerSlider({ movies }) {
  const fiveMovies = movies.slice(0, 5);

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {fiveMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            className="imgBanner"
            src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
            alt={movie.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function AdditionalSlider({ twelvemovies }) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={0}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {twelvemovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="imgBanner-pop">
            <img
              src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <p>{movie.vote_average}</p>
              <h3>{movie.title}</h3>
              <p>{truncateText(movie.overview, 30)}</p>
              <button className="readMore">
                <a href="#">Read More</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const popularMovies = PopAPI('popular');
  const upcomingMovies = PopAPI('upcoming');
  const topRatedMovies = PopAPI('top_rated');
  const nowPlayingMovies = PopAPI('now_playing');
  const twelvemovies = popularMovies.slice(0, 12);

  return (
    <div>
      {isLandingPage && (
        <>
          <BannerSlider movies={popularMovies} />
          <AdditionalSlider twelvemovies={twelvemovies} />
          <AdditionalSlider twelvemovies={upcomingMovies} />
          <AdditionalSlider twelvemovies={topRatedMovies} />
          <AdditionalSlider twelvemovies={nowPlayingMovies} />
        </>
      )}
    </div>
  );
}
