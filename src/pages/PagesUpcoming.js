import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesUpcoming() {
  const movies = GeneralAPI('upcoming');

  const twelvemovies = movies.slice(0,12);

  return (
    <div>
        <h1>Upcoming</h1>
        <div>
            {twelvemovies.map((movie) => (
                <MovieTab movie={movie}></MovieTab>
            ))}
        </div>
    </div>
);
}

export default PagesUpcoming;
