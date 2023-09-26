import MovieTab from "../components/MovieTab";
import { fetchMovies } from "../api/APIFunctions";
import { useSelector } from "react-redux";

function PagesUpcoming() {
    const movies = useSelector(state => state.movies.upcoming)

    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Upcoming</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movie={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesUpcoming;
