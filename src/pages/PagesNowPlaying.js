
import PopAPI from "../api/APIFunctionality";

function PagesNowPlaying() {
  const movies = PopAPI('now_playing');

  const twelvemovies = movies.slice(0,12);

  return (
    <main>
      <h2>Popular ~</h2>
      
      {twelvemovies.map((movie) => (
        <li key={movie.id}>
        {movie.title}
        <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}/>
        </li>
      ))}
    </main>

    
  );
}

export default PagesNowPlaying;
