import { UserContext } from "../context/userState";
import { useContext } from "react";
function PageLogin() {

    const { user, createUser, deleteUser } = useContext(UserContext);
    const [newUser, setNewUser] = useState("");

    function handleLogIn() {
        createUser({ name: newUser });
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
                    <input>

                    </input>


                </div>
            )


            }
        </div>
    );
};

export default PageLogin;