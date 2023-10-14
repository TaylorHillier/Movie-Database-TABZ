import React, { useContext, useState, useEffect } from 'react';
import { FavoriteContext } from '../context/movieState';
import { UserContext } from '../context/userState';
import style from './CreateFavorite.module.css';

function CreateFavorite({ movie }) {
  const { favorites, addFavorite, deleteFavorite } = useContext(FavoriteContext);
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const [prevUser, setPrevUser] = useState(null);
  const { dispatch } = useContext(FavoriteContext);

  // Check if the movie is already in favorites by comparing its ID
  const isAlreadyFavorited = favorites.some((favoritedMovie) => favoritedMovie.id === movie.id);

  //runs when user changes
  useEffect(() => {
    // Check if a different user has logged in
    if (user && prevUser && user.name !== prevUser.name) {
      // Clear favorites if a new user has logged in
      clearFavorites();
    }

    // Update the previous user with the current user
    setPrevUser(user);
  }, [user, prevUser]);

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };


  const handleFavoriteToggle = () => {
    if (user) {
      if (!isAlreadyFavorited) {
        // Add the movie to favorites if it's not already favorited
        addFavorite(movie);
      } else {
        // Remove the movie from favorites if it's already favorited
        deleteFavorite(movie);
        console.log("removing favorite");
      }
    } else {
      setError("Please Log In to Add Favorites");
    }

    setTimeout(() => {
      setError("");
    }, 3000);

  };

  //if there is a user, then favorites is available, if not, they will be prompted to log in.
  return (
    <div>
      {user && (
        <button className={`${style["favorites-button"]} mt-4 ${isAlreadyFavorited ? `${style["favorited"]}` : ''}`} onClick={handleFavoriteToggle}>
          {isAlreadyFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      )}
      {!user && (
        <button className={`mt-4 ${style["favorites-button"]}`} onClick={handleFavoriteToggle}>
          Add to Favorites
        </button>

      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CreateFavorite;

