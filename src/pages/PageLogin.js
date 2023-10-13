import { UserContext } from "../context/userState";
import { useContext } from "react";
import { useState } from "react";
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
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1 className="p-8">Welcome! Log in here to view your favorites, account details and more...</h1>
                    <div className="login-form pl-8 pb-8">
                        <h2 className="pb-2">Log In:</h2>
                        <input
                            type="text"
                            placeholder="Enter a Username"
                            value={newUser}
                            onChange={(e) => {
                                setNewUser(e.target.value);
                                setError("");
                            }}
                        />
                        <button onClick={handleLogIn}>Log In</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageLogin;