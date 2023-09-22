import MovieTab from "../components/MovieTab";
import { fetchMovies } from "../api/APIFunctions";

function PagesPopular() {
    const movies = fetchMovies("popular");

    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Popular</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movie={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesPopular;
