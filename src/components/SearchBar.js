import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

    const accessToken =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A";

    const apiKey = "ef270fffed69bc1d47de32648ff050cd";

    const authHeader = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: accessToken,
        },
    };

  const fetchSearch = async (query) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
            authHeader
        );
        let data = await response.json();
        console.log("Searching");
        return data.results;
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    async function fetchData() {
      if (query.trim() === '') {
        setMovies([]); // No query, clear the movie list
      } else {
        const results = await fetchSearch(query);
        setMovies(results);
      }
    }
  
    fetchData();
  }, [query]);
  

  console.log('Query:', query);
  console.log('Movies:', movies);
  return (
      
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        movies.map((movie, index) => (
            <div key={index}>
                <img
            key={index}
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.original_title + " backdrop image"}
          />
                <h2>{movie.title}</h2>
                </div>
        ))
        }
    </div>
    );
}

export default SearchBar;
