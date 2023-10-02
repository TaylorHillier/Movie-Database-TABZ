// Individual Movie Poster Tabs

export default function MovieTab({ movieObj }) {
    const releaseDate = new Date(movieObj.release_date).toDateString();
    const releaseDateString = releaseDate.slice(4, releaseDate.length);

    return (
        <>
            <article className="w-1/2">
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
                alt={movieObj.title + " poster"}
            />
                <h2 className="uppercase text-gray-600 mt-2">{movieObj.title}</h2>
                <p className="text-neutral-50">{movieObj.overview}</p>
                <b>{releaseDateString}</b>
            </article>
        </>
    );
}
