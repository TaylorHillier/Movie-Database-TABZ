import { FavoriteContext } from "../context/movieState";
import { useContext } from "react";
import { UserContext } from "../context/userState";
import GeneralAPI from "../api/APIFunctionality";
import "../components/App.css";
import CreateFavorite from "../components/CreateFavorite";

function PageFavorites() {
    const { user } = useContext(UserContext);
    const {favorites} = useContext(FavoriteContext);

      
    return (
        <div>
            {user ? (
                // If user is logged in, show the favorites content
                <div>
                    <h2>Welcome to Your Favorites</h2>
                    {favorites.length > 0 ? (
                        <div className="imgBanner-pop">
                                {favorites.map((favoritedMovie) => (
                                    <div className="imgBanner-pop">
                                    <img
                                    src={`https://image.tmdb.org/t/p/w1280/${favoritedMovie.backdrop_path}`}
                                    alt={favoritedMovie.title}
                                    className="movie-poster"
                                    />
                                    <h3>{favoritedMovie.title}</h3>
                                    <p>{favoritedMovie.overview}</p>
                                    <CreateFavorite movie={favoritedMovie} />
                                    </div>
                                ))}
                        </div>
                        ) : (
                            <p>You have no Favorites yet</p>
                        )
                        
                    }
                </div>
            ) : (
                // If user is not logged in, show a login prompt
                <div>
                    <p>You must be logged in to access your favorites.</p>
                    <p>
                        <a href="/login">Login</a> to continue.
                    </p>
                </div>
            )}
        </div>
    );
}

export default PageFavorites;