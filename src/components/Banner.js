// import "./App.css";
import { truncateText } from "../utils/utilityFunctions";
import { fetchMovies } from "../api/APIFunctions"
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

// export function Banner({ category }) {
//     //   const [posters, setPosters] = useState([]);
//     const backdrops = GeneralAPI(category);
//     const movies = backdrops.slice(0, 6);
//     //   const getBackdrop = () => {
//     //     let poster = posters.find((poster) => poster.vote_count > 9);
//     //     return poster && poster.file_path;
//     //   };
//     console.log(backdrops);

//     return (
//         <swiper-container
//             navigation
//             pagination
//             pagination-clickable="true"
//             loop
//             effect="fade"
//             fade-effect-cross-fade="true"
//             autoplay-delay="3500"
//             autoplay-disable-on-interaction="false"
//             space-between="30"
//         >
//             {movies.map((movie, index) => (
//                 <swiper-slide>
//                     <div className="title">
//                         <h3>{movie.original_title}</h3>
//                     </div>
//                     <img
//                         key={index}
//                         src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
//                         alt={movie.original_title + " backdrop image"}
//                     />
//                 </swiper-slide>
//             ))}
//         </swiper-container>
//     );
// }

export function BannerSlider({ movies }) {
  const fiveMovies = movies.slice(0, 5);

  return (
    <swiper-container
      space-between="30"
      autoplay-delay="3000"
      autoplay-disable-on-interaction="false"
      pagination-clickable="true"
      class="mySwiper"
    >
      {fiveMovies.map((movie) => (
        <swiper-slide key={movie.id}>
          <div className="imgBanner flex justify-end">
            <div className="info-banner flex flex-col text-left relative w-[auto] h-[100%] text-[white] blur-[90%] bg-[rgba(0,0,0,0.6)] text-[1.2rem] px-20 py-8">
              <p>{movie.release_date.split("-")[0]}</p>
              <h1>{movie.title}</h1>
              {/* <p>{truncateText(movie.overview, 50)}</p> */}
              <p className="truncate">{movie.overview}</p>
              <p className="score flex text-[2rem] items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  width="50px"
                  viewBox="0 0 576 512"
                  fill="#FFD43B"
                  className="pr-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                {movie.vote_average}
              </p>
            </div>
            <img
              className="imgBanner-poster w-auto h-[100%] mr-[25rem]"
              src={
                "https://image.tmdb.org/t/p/original/" +
                movie.poster_path
              }
              alt={movie.title}
            />
            <img
              className="imgBanner-backdrop h-[100%] w-full absolute brightness-[35%]  blur-[100%] -z-1"
              src={
                "https://image.tmdb.org/t/p/original/" +
                movie.backdrop_path
              }
              alt={movie.title}
            />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
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

  const handleAddFavorite = (movie) => {
    return <CreateFavorite movie={movie} />;
  };


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
              <CreateFavorite movie={movie} />;
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

  const popularMovies = GeneralAPI('popular');
  const upcomingMovies = GeneralAPI('upcoming');
  const topRatedMovies = GeneralAPI('top_rated');
  const nowPlayingMovies = GeneralAPI('now_playing');
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
