
import GeneralAPI from "../api/APIFunctionality";

function PagesUpcoming() {
  const movies = GeneralAPI('upcoming');

  const twelvemovies = movies.slice(0,12);

  return (
    <main>
      <h2>Upcoming</h2>
      
      {twelvemovies.map((movie) => (
        <li key={movie.id}>
        {movie.title}
        <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}/>
        </li>
      ))}
    </main>

    
  );
}

export default PagesUpcoming;
