import MovieTab from "../components/MovieTab";

function PagesTemplate({category, twelveMovies}) {

    return (
        <>
            <h1>{category}</h1>
            <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:px-[3rem] xl:grid-cols-5">
                {twelveMovies.map((movie, index) => (
                    <MovieTab key={index} movieObj={movie}></MovieTab>
                ))}
            </section>
        </>
    );
}

export default PagesTemplate;