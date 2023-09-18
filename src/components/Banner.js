import { useLocation } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./App.css";
import PopAPI from "../api/APIFunctionality";
import { Pagination, Autoplay , Navigation} from "swiper/modules";

function Banner() {
  const location = useLocation();
  const movies = PopAPI('popular');
  const isLandingPage = location.pathname === "/";
  const fourmovies = movies.slice(0, 4);
  const twelvemovies = movies.slice(0, 12);


  return (
    <>
      {isLandingPage && (
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
          {fourmovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                className="imgBanner"
                src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
                alt={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

function AdditionalSlider({ twelvemovies }) {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={0}
      navigation={true}
      modules={[ Navigation]}
      className="mySwiper"
    >
      {twelvemovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            className="imgBanner-pop"
            src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
            alt={movie.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function App() {
  const movies = PopAPI('popular');
  const twelvemovies = movies.slice(0, 12);

  return (
    <div>
      <Banner />
      <AdditionalSlider twelvemovies={twelvemovies} />
    </div>
  );
}
