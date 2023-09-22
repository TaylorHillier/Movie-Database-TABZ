import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesNowPlaying() {
    const movies = GeneralAPI("now_playing");

    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Now Playing</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movie={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesNowPlaying;
