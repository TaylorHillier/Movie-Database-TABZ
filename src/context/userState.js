import React, { createContext, useReducer } from 'react';
import userReducer from './userReducer';

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false,
};

// Create context
const UserContext = createContext(initialState);

// Provider component
function UserProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Actions
    function createUser(user) {
        dispatch({
            type: 'CREATE_USER',
            payload: user,
        });
    }

    function deleteUser() {
        dispatch({
            type: 'DELETE_USER',
            payload: null,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                user: state.user,
                createUser,
                deleteUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { UserContext, UserProvider };