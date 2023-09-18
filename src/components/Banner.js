import { useEffect, useState } from "react";
import GeneralAPI from "../api/APIFunctions";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

function Banner() {
  //   const [posters, setPosters] = useState([]);
  const backdrops = GeneralAPI("popular");
  const movies = backdrops.slice(0, 6);
  //   const getBackdrop = () => {
  //     let poster = posters.find((poster) => poster.vote_count > 9);
  //     return poster && poster.file_path;
  //   };
  console.log(backdrops);

  return (
    <swiper-container
      navigation
      pagination
      pagination-clickable="true"
      loop
      effect="fade"
      fade-effect-cross-fade="true"
      centered-slides="true"
      autoplay-delay="3000"
      autoplay-disable-on-interaction="false"
      space-between="30"
    >
      {movies.map((movie, index) => (
        <swiper-slide>
          <div class="title">
            <h3>{movie.original_title}</h3>
          </div>
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.original_title + " backdrop image"}
          />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default Banner;
