import MovieTab from "../components/MovieTab";
import GeneralAPI from "../api/APIFunctions";

function PagesNowPlaying() {
    const movies = GeneralAPI("now_playing");

    const twelvemovies = movies.slice(0, 12);

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

export default PagesNowPlaying;
