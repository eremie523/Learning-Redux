const { default: axios } = require("axios");
const { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } = require("./userActionTypes");

export function fetchUserRequest() {
    return {
        type: FETCH_USER_REQUEST
    };
};

export function fetchUserSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            user
        }
    };
};

export function fetchUserFailure(error) {
    return {
        type: FETCH_USER_FAILURE,
        payload: {
            error
        }
    }
}

export function fetchUser() {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const users = response.data;
            dispatch(fetchUserSuccess(users));
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(fetchUserFailure(errorMessage));
        });
    }
}