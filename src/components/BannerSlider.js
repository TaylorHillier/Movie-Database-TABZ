import { truncateText } from "../utils/utilityFunctions";
import style from "./BannerSlider.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function BannerSlider({ movies }) {
    const fiveMovies = movies.slice(0, 5);
  
    return (
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 35000
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="max-h-fit w-full"
      >
        {fiveMovies.map((movie) => (
          <SwiperSlide key={movie.id} className="">
            <div className={style['imgBanner']}>
              <img
                className={style['imgBanner-poster'] + ` hidden`}
                src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
                alt={movie.title}
              />
              <img
                className={style['imgBanner-backdrop']}
                src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path }
                alt={movie.title}
              />
              <div className={style['info-banner']}>
                <h2>{movie.title}</h2>
                <p>{movie.release_date.split("-")[0]}</p>
                <p>{truncateText(movie.overview, 50)}</p>
                <p className={style['score']}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" viewBox="0 0 576 512" fill="#FFD43B">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                  </svg>
                  {movie.vote_average}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }