import MovieTab from "../components/MovieTab";
import { useSelector } from "react-redux";

function PagesPopular() {
    const movies = useSelector((state) => state.movies.popular);
    const twelvemovies = movies.slice(0, 12);

    return (
        <div>
            <h1>Popular</h1>
            <div>
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movieObj={movie}></MovieTab>
                ))}
            </div>
        </div>
    );
}

export default PagesPopular;
