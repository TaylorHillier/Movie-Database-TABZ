import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // popular: fetchMovies("popular") || [],
    // top_rated: fetchMovies('top_rated') || [],
    // upcoming: fetchMovies('upcoming') || [],
    // now_playing: fetchMovies('now_playing') || [],
    popular: [],
    top_rated: [],
    upcoming: [],
    now_playing: [],
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        loadMovies: (state, action) => {
            // console.log(action, action.type, action.payload);
            switch (action.payload.category) {
                case "popular":
                    state.popular = action.payload.movies;
                case "top_rated":
                    state.top_rated = action.payload.movies;
                case "upcoming":
                    state.upcoming = action.payload.movies;
                case "now_playing":
                    state.now_playing = action.payload.movies;
                default:
                    return state;
            }
        },
    },
});

export const { loadMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
