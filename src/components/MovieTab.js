// Individual Movie Poster Tabs
import CreateFavorite from "./CreateFavorite";
export default function MovieTab({ movieObj }) {
    const releaseDate = new Date(movieObj.release_date).toDateString();
    const releaseDateString = releaseDate.slice(4, releaseDate.length);

    function shortenText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }


    return (
        <>
            <article className="w-full pb-8 text-center">
                <img
                    className="w-full"
                    src={"https://image.tmdb.org/t/p/w92/" + movieObj.poster_path}
                    srcSet={
                        "https://image.tmdb.org/t/p/w92/" + movieObj.poster_path + " 92w, " +
                        "https://image.tmdb.org/t/p/w154/" + movieObj.poster_path + " 154w, " +
                        "https://image.tmdb.org/t/p/w185/" + movieObj.poster_path + " 185w, " +
                        "https://image.tmdb.org/t/p/w342/" + movieObj.poster_path + " 342w, " +
                        "https://image.tmdb.org/t/p/w500/" + movieObj.poster_path + " 500w, " +
                        "https://image.tmdb.org/t/p/w780/" + movieObj.poster_path + " 780w, " +
                        "https://image.tmdb.org/t/p/original/" + movieObj.poster_path + " 1000w"
                    }
                    sizes="(max-width: 600px) 92px,
                        (max-width: 900px) 154px,
                        (max-width: 1200px) 185px,
                        (max-width: 1600px) 342px,
                        (max-width: 2000px) 500px,
                        (max-width: 2400px) 780px,
                        1000px"
                    alt={movieObj.title + " poster"}
                />
                <div className="flex justify-center">
                    <h3 className="my-3 min-h-[3rem]">{movieObj.title}</h3>
                </div>
                <b>Released: <br /> {releaseDateString}</b>
                <CreateFavorite movie={movieObj} />
                <p className="text-left mt-8 hidden sm:block sm:leading-normal md:leading-[1.8]">{shortenText(movieObj.overview, 100)}</p>
            </article>
        </>
    );
}
