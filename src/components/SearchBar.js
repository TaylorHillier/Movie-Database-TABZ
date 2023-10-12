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

  function formatDate(APIDate) {
    const date = new Date(APIDate);
    const options = { year: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  }
  
  return (
      
    <div>
        <svg className="relative left-8" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" fill='black'/></svg>
      <input
      className='p-4 w-4/5 m-auto'
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        movies.map((movie, index) => (
            <div key={index} className='grid grid-cols-[1fr_9fr]'>
                <img
                key={index}
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.original_title + " backdrop image"}
                />
                <div className=''>
                <h2 className='p-2'>{movie.title} ({formatDate(movie.release_date)})</h2>
                <p className='p-2'>{movie.overview}</p>
                </div>
            </div>
        ))
        }
    </div>
    );
}

export default SearchBar;
