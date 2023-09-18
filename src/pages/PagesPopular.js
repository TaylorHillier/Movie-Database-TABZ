import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesPopular() {
  const movies = GeneralAPI('popular');

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

export default PagesPopular;
