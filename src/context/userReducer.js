
function UserReducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            const newUser = {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            } // chat gpt helped with ordering here. declare new user so payload can be used in localstorage

            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated', 'true');

            return newUser;
        case 'DELETE_USER':
            const destroyUser = {
                ...state,
                user: null,
                isAuthenticated: false,
            }

            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');

            return destroyUser;
        default:
            return state;
    }
}

export default UserReducer;