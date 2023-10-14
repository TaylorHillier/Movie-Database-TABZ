import { UserContext } from "../context/userState";
import { useContext } from "react";
import { useState } from "react";
import { FavoriteContext } from "../context/movieState";

function PageLogin() {

    const { user, createUser, deleteUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState("");
    const [error, setError] = useState("");


    function handleLogIn() {
        if (newUser.trim() === "") {
            setError("Username cannot be blank");
        } else {
            createUser({ name: newUser });
            setError("");
        }
    }

    function handleLogOut() {
        deleteUser();
    }

    return (
        <div className="w-4/5 m-auto">
            {user ? (
                <div>
                    <h1>Welcome, {user.name}!</h1>
                    <p>You currently have {}</p>
                    <button onClick={handleLogOut} className="p-2 my-4 bg-theme-red text-white border-none">Logout</button>
                </div>
            ) : (
                <div className="flex m-auto">
                    <div className="login-form flex justify-center flex-col">
                        <h2 className="pb-2">Log In:</h2>
                        <input
                            type="text"
                            placeholder="Enter a Username"
                            value={newUser}
                            className="my-2 p-2"
                            onChange={(e) => {
                                setNewUser(e.target.value);
                                setError("");
                            }}
                        />
                        <button onClick={handleLogIn} className="p-2 bg-theme-red text-white border-none">Log In</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <h1 className="p-8">Welcome! Log in here to view your favorites, account details and more...</h1>
                    
                </div>
            )}
        </div>
    );
};

export default PageLogin;