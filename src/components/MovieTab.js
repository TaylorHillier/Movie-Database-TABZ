// Individual Movie Poster Tabs

export default function MovieTab({ movie }) {
    const releaseDate = new Date(movie.release_date).toDateString();
    const releaseDateString = releaseDate.slice(4, releaseDate.length);

    return (
        <div key={movie.id} style={{ border: "3px solid blue" }}>
            <img src={"https://image.tmdb.org/t/p/w185/" + movie.poster_path} />
            <h3 className="uppercase text-gray-600 mt-2">{movie.title}</h3>
            <p>{movie.overview}</p>
            <b>{releaseDateString}</b>
        </div>
    );
}
