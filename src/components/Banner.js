import { useEffect, useState } from "react";

function Banner() {
  const [posters, setPosters] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A",
    },
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/335977/images", options)
      .then((response) => response.json())
      .then((response) => setPosters(response.backdrops))
      // .then(() => setSelected(posters.find((poster) => poster.vote_count > 9)))
      // .then(response => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  const getBackdrop = () => {
    let poster = posters.find((poster) => poster.vote_count > 9);
    return poster && poster.file_path;
  };
  // getPoster()

  // https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
  return (
    <div>
        <img key="1" src={`https://image.tmdb.org/t/p/w780/${getBackdrop()}`}/>
      {/* <p>{getPoster()}</p> */}
    </div>
  );
}

export default Banner;
