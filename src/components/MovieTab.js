// Individual Movie Poster Tabs

export default function MovieTab({ movieObj }) {
    const releaseDate = new Date(movieObj.release_date).toDateString();
    const releaseDateString = releaseDate.slice(4, releaseDate.length);

    return (
        <>
            <div key={movieObj.id} className="w-fit">
                <img
                    className="w-1/5"
                    src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
                    alt={movieObj.title + " poster"}
                />
                <h3 className="uppercase text-gray-600 mt-2">{movieObj.title}</h3>
                <p className="text-neutral-50">{movieObj.overview}</p>
                <b>{releaseDateString}</b>
            </div>
        </>
    );
}
