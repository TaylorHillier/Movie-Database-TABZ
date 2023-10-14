import React, { createContext, useReducer, useEffect } from 'react';
import UserReducer from './userReducer';
import MovieReducer from './movieReducer';

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false,
};

// Create context
const UserContext = createContext(initialState);


function UserProvider({ children }) {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    useEffect(() => {
        dispatch({ type: 'INITIALIZE_USER' });
    }, []);

    //create user
    function createUser(user) {

        if (user !== state.user) {
            // If it's a different user, clear the favorites
            dispatch({ type: 'CLEAR_FAVORITES' });
        }

        dispatch({
            type: 'CREATE_USER',
            payload: user,
        });
    }

    //delete user
    function deleteUser() {
        dispatch({
            type: 'DELETE_USER',
            payload: "",
        });
    }

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isAuthenticated: state.isAuthenticated,
                createUser,
                deleteUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };