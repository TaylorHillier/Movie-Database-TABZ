// Individual Movie Poster Tabs

export default function MovieTab({ movie }) {
    const releaseDate = new Date(movie.release_date).toDateString();
    const releaseDateString = releaseDate.slice(4, releaseDate.length);

    return (
        <>
            <div key={movie.id} className="w-fit">
                <img
                    className="w-1/5"
                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                />
                <h3 className="uppercase text-gray-600 mt-2">{movie.title}</h3>
                <p className="text-neutral-50">{movie.overview}</p>
                <b>{releaseDateString}</b>
            </div>
        </>
    );
}
