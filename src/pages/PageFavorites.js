import { UserContext } from "../context/userState";
import { useContext } from "react";


function PageFavorites() {
    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? (
                // If user is logged in, show the favorites content
                <div>
                    <h2>Welcome to Your Favorites</h2>
                    {/* Add your favorites content here */}
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