const initUser = {
    user: [],
    isLoading: false,
    error: null,
};

export default function userReducer(state = initUser, action) {
    switch (action.type) {
        case "FETCH_USER_REQUEST":
            return {
                ...state,
                isLoading: true,
            };
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                error: null,
            };
        case "FETCH_USER_FAILURE":
            return {
                ...state,
                isLoading: false,
                user: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}