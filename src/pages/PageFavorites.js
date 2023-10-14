import { FavoriteContext } from "../context/movieState";
import { useContext } from "react";
import { UserContext } from "../context/userState";
import "../components/App.css";
import MovieTab from "../components/MovieTab";
import "./favorites.css";

function PageFavorites() {
    const { user } = useContext(UserContext);
    const { favorites } = useContext(FavoriteContext);

    return (
        <div>
            {user ? (
                // If user is logged in, show the favorites content
                <div>
                    <h2 className="p-12 text-center">Hi {user.name}! Welcome to Your Favorites.</h2>
                    {favorites.length > 0 ? (
                        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:px-[3rem] xl:grid-cols-5">
                            {favorites.map((favoritedMovie, index) => (
                                <MovieTab key={index} movieObj={favoritedMovie}></MovieTab>
                            ))}
                        </section>
                    ) : (
                        <p className="p-12 text-center">You have no favorites yet.</p>
                    )

                    }
                </div>
            ) : (
                // If user is not logged in, show a login prompt
                <div className="no-user m-auto p-8 flex w-3/5 flex-col">
                    <p>You must be logged in to access your favorites.</p>
                    <p>
                        <a href="/login" className="">Login</a> to continue.
                    </p>
                </div>
            )}
        </div>
    );
}

export default PageFavorites;