const accessToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI3MGZmZmVkNjliYzFkNDdkZTMyNjQ4ZmYwNTBjZCIsInN1YiI6IjY0ZWQwMzNjYzYxM2NlMDEyY2M2YWU5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46gYzA8BqZarsSismrtiSK-mV5olei9Q30Xvvlpwo5A";

const apiKey = "ef270fffed69bc1d47de32648ff050cd";

const authHeader = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: accessToken,
    },
};

export const fetchMovies = async (category) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
            authHeader
        );
        let data = await response.json();
        console.log("RUN FETCH");
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

// export const fetchSingleMovie = async (movieId) => {
//     fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=ef270fffed69bc1d47de32648ff050cd&language=en-US`
//       )
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
        
//         .then((data) => {
//             return data;
//         })
  
//         .catch((error) => {
//           console.error("Error fetching movie data:", error);
//         });
// }

// export const fetchCredits = async(movieId) => {
//     fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ef270fffed69bc1d47de32648ff050cd`
//       )
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//             return data;
//         })
          
//         .catch((error) => {
//           console.error("Error fetching movie credits:", error);
          
//         });
// }

// export const fetchVideo = async(movieId) => {
//     fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=ef270fffed69bc1d47de32648ff050cd`
//       )
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           return data;
//         })
//         .catch((error) => {
//           console.error("Error fetching movie video:", error);
//         });
// }



