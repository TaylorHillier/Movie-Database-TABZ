function MovieReducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE_FAVORITES':
      const storedFavorites = localStorage.getItem('favorites');
      return {
        ...state,
        favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
      };
    case 'ADD_FAVORITE':
      if (!state.favorites.some((movie) => movie.id === action.payload.id)) {
        const favoritesAdd = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(favoritesAdd));
        return {
          ...state,
          favorites: favoritesAdd,
        };
      }
    case 'DELETE_FAVORITE':
      const favoritesDelete = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem('favorites', JSON.stringify(favoritesDelete));
      return {
        ...state,
        favorites: favoritesDelete,
      };
    default:
      return state;
  }
}

export default MovieReducer;
