import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./App.css";
import PopAPI from "../api/APIFunctionality";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FreeMode,Scrollbar, Mousewheel } from 'swiper/modules';

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
        delay: 3500,

      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {fiveMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="imgBanner">
            <div className="info-banner">
              <p>{movie.release_date.split("-")[0]}</p>
              <h1>{movie.title}</h1>
              <p>{truncateText(movie.overview, 50)}</p>
              <p className="score">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 576 512" fill="#FFD43B">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                </svg>
                {movie.vote_average}
              </p>
            </div>
            <img
              className="imgBanner-poster"
              src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              alt={movie.title}
            />
            <img
              className="imgBanner-backdrop"
              src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path }
              alt={movie.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function AdditionalSlider({ twelvemovies }) {

  const [movieId, setMovieId] = useState ();
  const [rotationState, setRotationState] = useState([
    false, // For Popular
    false, // For Upcoming
    false, // For Top Rated
    false, // For Now Playing
  ]);

  const handleRotation = (index, id) => {
    setMovieId(id);
    const updatedRotationState = [...rotationState];
    updatedRotationState[index] = !updatedRotationState[index];
    setRotationState(updatedRotationState);
  };

  return (
    <div className="wrapperAll">
    <Swiper
       breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        880: {
           slidesPerView: 3,
           spaceBetween: 10,
         },
        1170: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
         1500: {
           slidesPerView: 5,
           spaceBetween: 10,
         },
       }}
      spaceBetween={0}
      navigation={true}
      loop={true}
      className="mySwiper"
      style={{width: "85%"}}
      direction={'horizontal'}
      slidesPerView={'auto'}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}>
      {twelvemovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="swiper-slide-container">
            <div className="imgBanner-pop" >
              <img
                src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <p className="score-small">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 576 512" fill="#FFD43B">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                  </svg>
                  {movie.vote_average}
                </p>
                <h3>{truncateText(movie.title, 7)}</h3>
                <p>{truncateText(movie.overview, 25)}</p>
                <Link to={`/movie/${movie.id}`} className="readMore">
                  Read More
                </Link>                
              </div>
            </div>
          </div>
          <section className="description-info">
            <article className="description-title">
              <p >{truncateText(movie.title, 5)}</p>
              <button
                 className={`favorite-button ${rotationState[0] && movie.id === movieId ? 'rotate-45' : ''}`}
                onClick={() => handleRotation(0, movie.id)} >
                <svg id="rotatingSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>
                </svg>
              </button>
            </article> 
            <p className="description-date">{movie.release_date.split("-")[0]}</p>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
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
          <p className="main-title"><a href="/popular">Popular</a></p>
          <AdditionalSlider twelvemovies={twelvemovies} />
          <p className="main-title"><a href="/upcoming">Upcoming</a></p>
          <AdditionalSlider twelvemovies={upcomingMovies} />
          <p className="main-title"><a href="/top-rated">Top Rated</a></p>
          <AdditionalSlider twelvemovies={topRatedMovies} />
          <p className="main-title"><a href="/now-playing">Now Playing</a></p>
          <AdditionalSlider twelvemovies={nowPlayingMovies} />
        </>
      )}
    </div>
  );
}