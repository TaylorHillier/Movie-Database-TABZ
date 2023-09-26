import MovieTab from "../components/MovieTab";
import { fetchMovies } from "../api/APIFunctions";
import { useSelector } from "react-redux";

function PagesTopRated() {
    const movies = useSelector(state => state.movies.top_rated)

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
