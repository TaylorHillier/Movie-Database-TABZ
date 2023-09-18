import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesTopRated() {
  const movies = GeneralAPI('top_rated');

  const twelvemovies = movies.slice(0,12);

  return (
    <main>
        <h1>Now Playing</h1>
        <div>
            {twelvemovies.map((movie) => (
                <MovieTab movie={movie}></MovieTab>
            ))}
        </div>
    </main>
);
}

export default PagesTopRated;

