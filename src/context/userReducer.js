
function userReducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case 'DELETE_USER':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}

export default userReducer;