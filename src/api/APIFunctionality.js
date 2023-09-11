import { useState, useEffect } from "react";


const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A';

const apiKey = 'ef270fffed69bc1d47de32648ff050cd';
  
function HomeAPI () {
    const [movies, setMovie] = useState([]);
  

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A'
      }
    };
  
    useEffect(() => {
      fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        setMovie(data.results);
      })
      .catch(err => console.error(err));
    }, []);

    return(
    <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}
          <img  key={movie.id} src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path}>
          </img>
          </li>
        ))}
    </ul>
    );
}

export default HomeAPI;