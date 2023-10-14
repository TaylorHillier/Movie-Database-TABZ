import React, { useState, useEffect } from 'react';
import ColorScore from './ColorScore';
import style from './SearchBar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchBar(resetSearch) {
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

  function shortenText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

  return (
      
    <div>
      <div className='search-bar flex m-8 z-100'>
        <svg className="" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" fill='black'/></svg>
        <input
        className='p-4 w-3/5 m-auto'
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <section className={`${query ? 'visible' : 'hidden'} search-area backdrop-blur backdrop-brightness-50 absolute m-auto flex w-full z-50 h-max ${style['animated-section']}`}>
        {movies.length > 0 ? (
        <div className='results-container m-auto md:w-3/5'>
          {query && (
          <h1 className='ml-4 md:ml-0' >Closest matches for: {query}</h1>
          )}
          
          <div className='grid-cols-2 grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-0 md:bg-theme-bg search-results w-full h-full p-4 rounded-lg shadow-lg'>
              {

              movies.slice(0, 12).map((movie, index) => (

                <div key={index} className='grid grid-row-[10fr-1fr] md:grid-cols-[3fr_17fr] m-auto mb-4 md:border-solid md:p-2'>
                  
                   <Link to={`/movie/${movie.id}`} onClick={resetSearch}>
                   <img
                      key={index}
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.original_title + " backdrop image"}
                      className='mb-2 object-cover rounded-md'
                      />
                </Link>   

                    <div className='search-info justify-between md:block'>

                      <div className='flex flex-col md:flex-row justify-between items-start'>

                        <div className='movie-title flex flex-col md:flex-row md:items-center mb-2 md:mb-0'>

                        <Link to={`/movie/${movie.id}`} onClick={resetSearch}><h4 className='md:p-2 mb-2  md:mb-0'>{movie.title} </h4> </Link>  <p>({formatDate(movie.release_date)})</p>

                        </div>
                        <div className='rating'>

                          <p className={`border-solid w-fit p-2 ml-1 ${ColorScore(movie.vote_average)}`}>{parseFloat(movie.vote_average).toFixed(1)}</p>

                        </div>

                      </div>

                      <p className='p-2 pr-12 hidden md:block'>{shortenText(movie.overview, 220)}</p>

                    </div>

                  </div>
                  
                
                  ))}
              
          </div>
        </div> ) : (
          setTimeout(() => {
            <p className='w-full text-center p-12 h-full'>{query ? 'No Movies found.' : 'Start Typing to find movies.'}</p>
          }, 1000)
        )}
      </section>
    </div>
    );
}

export default SearchBar;
