import MovieTab from "../components/MovieTab";
import { fetchMovies } from "../api/APIFunctions";

function PagesUpcoming() {
    const movies = fetchMovies("upcoming");

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
