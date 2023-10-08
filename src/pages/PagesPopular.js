import MovieTab from "../components/MovieTab";
import { useSelector } from "react-redux";

function PagesPopular() {
    const movies = useSelector((state) => state.movies.popular);
    const twelvemovies = movies.slice(0, 12);

    return (
        <>
            <h1>Popular</h1>
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:px-[3rem] lg:grid-cols-5">
                {twelvemovies.map((movie, index) => (
                    <MovieTab key={index} movieObj={movie}></MovieTab>
                ))}
            </section>
        </>
    );
}

export default PagesPopular;
