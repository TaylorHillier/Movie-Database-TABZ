import MovieTab from "../components/MovieTab";
import { fetchMovies } from "../api/APIFunctions";

function PagesTopRated() {
    const movies = fetchMovies("top_rated");

    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Top Rated</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movie={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesTopRated;
