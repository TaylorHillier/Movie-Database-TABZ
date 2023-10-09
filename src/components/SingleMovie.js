import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

function SingleMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the movieId parameter
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ef270fffed69bc1d47de32648ff050cd&language=en-US`)
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
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );
}

export default SingleMovie;
