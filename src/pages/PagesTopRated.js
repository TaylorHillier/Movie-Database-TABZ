import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesTopRated() {
  const movies = GeneralAPI('top_rated');

  const twelvemovies = movies.slice(0,12);

  return (
    <div>
        <h1>Top Rated</h1>
        <div>
            {twelvemovies.map((movie) => (
                <MovieTab movie={movie}></MovieTab>
            ))}
        </div>
    </div>
);
}

export default PagesTopRated;

