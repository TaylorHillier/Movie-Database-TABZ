import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesPopular() {
  const movies = GeneralAPI('popular');

  const twelvemovies = movies.slice(0,12);

  return (
    <div>
        <h1>Popular</h1>
        <div>
            {twelvemovies.map((movie) => (
                <MovieTab movie={movie}></MovieTab>
            ))}
        </div>
    </div>
);
}

export default PagesPopular;
