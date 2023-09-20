function MovieReducer(state, action) {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case 'DELETE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter(
            (movie) => movie !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  
  export default MovieReducer;
  