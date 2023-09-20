import React, { useContext, useState } from 'react';
import { FavoriteContext } from '../context/movieState';

function CreateFavorite({ movie }) {
  // Check if the movie is already in favorites by comparing its ID
  const { favorites, addFavorite, deleteFavorite } = useContext(FavoriteContext);

  const isAlreadyFavorited = favorites.some((favoritedMovie) => favoritedMovie.id === movie.id);

  const handleFavoriteToggle = () => {
    if (!isAlreadyFavorited) {
      // Add the movie to favorites if it's not already favorited
      addFavorite(movie);
    } else {
      // Remove the movie from favorites if it's already favorited
      deleteFavorite(movie);
      console.log("removing favorite");
    }
  };

  return (
    <button onClick={handleFavoriteToggle}>
      {isAlreadyFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
}

export default CreateFavorite;

