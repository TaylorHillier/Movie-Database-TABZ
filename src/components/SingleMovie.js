import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./App.css";
import YouTubePopup from "./YouTubePopup";


function convertVoteAverageToPercentage(voteAverage) {
  voteAverage = Math.min(10, Math.max(0, parseFloat(voteAverage)));
  return Math.round(voteAverage * 10);
}

function SingleMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieCredits, setMovieCredits] = useState({ cast: [], crew: [] });
  const [movieVideo, setMovieVideo] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ef270fffed69bc1d47de32648ff050cd&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setMovie(null);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ef270fffed69bc1d47de32648ff050cd`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovieCredits({ ...movieCredits, cast: data.cast.slice(0, 6) });
      })
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
        setMovieCredits({ cast: [], crew: [] });
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ef270fffed69bc1d47de32648ff050cd`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          // Set the first video result as the movie video
          setMovieVideo(data.results[0]);
        } else {
          // If no video is available, set it to null
          setMovieVideo(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie video:", error);
        setMovieVideo(null);
      });
  }, [movieId]);

  if (!movie || (!movieCredits.cast.length && !movieCredits.crew.length)) {
    return <div>Loading...</div>;
  }


  return (
    <div>
        <img
          className="single-backdrop"
          src={"https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
          alt={movie.title}
        />
        <Link className="arrow-back" to="#" onClick={() => window.history.back()}> 
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fillRule="nonzero"/></svg>
        </Link>
      <section className="single-info">
        <article className="image-container">
          <img
            className="single-poster"
            src={"https://image.tmdb.org/t/p/w1280/" + movie.poster_path}
            alt={movie.title}
          />
        </article>
        <article className="single-description">
          <h1>{movie.title}</h1>
          <div className="single-detail">
            <p>Release Date: {movie.release_date}</p>
            <p className="score-small">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                width="20px"
                viewBox="0 0 576 512"
                fill="#FFD43B"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              {convertVoteAverageToPercentage(movie.vote_average)}%
            </p>
            {movieVideo ? (
              <div className="movie-video">
                <a className="trailer-sec"
                  href={`https://www.youtube.com/watch?v=${movieVideo.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >              
                  <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"/>
                  </svg>
                  Play Trailer
                  
                </a>               
              </div>
            ) : (
              <p>No trailer available</p>
            )}
           
            <button className="favorite-button">
              <svg id="rotatingSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>
              </svg>
            </button>
          </div>
          <h3 className="overview-title">Overview:</h3>
          <p className="overview-text">{movie.overview}</p>
        </article>
      </section>
      <section className="casts-lists">
        <ul className="casts-list">
          {movieCredits.cast.map((actor) => (
            <li key={actor.id} className="cast-info">
              {actor.profile_path && (
                <img
                src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`}
                alt={actor.name}
                />
                )}
                <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SingleMovie;
