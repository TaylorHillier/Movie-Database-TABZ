import { useState, useEffect } from "react";

const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A";

const apiKey = "ef270fffed69bc1d47de32648ff050cd";

const authHeader = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A",
    },
};

function GeneralAPI(category) {
    // Takes in movies category parameter
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
                    authHeader
                );
                let data = await response.json();
                setMovie(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchMovies();
    }, []);

    return movies;
}

function MovieTab(movie){
  return (
    <div>

    </div>
  )
}

export default GeneralAPI;
