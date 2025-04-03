"use client"
import { fetchUser } from "@/redux/user/userActions";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserContainer = ({ user, error, isLoading, fetchUserAction }) => {
    useEffect(() => {
        if (!isLoading) fetchUserAction();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {
                user && (user != null) && Array.isArray(user) ?
                    (user == []) ? <p>No Users fetched</p> :
                        user.map(({ name, email, id, username }) =>

                            <div key={id}>
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{username}</p>

                                <br />
                                <hr />
                                <br />
                            </div>
                        ) :
                (error && (error != null) && (typeof error == "string") && (error.trim() != 0)) &&
                <p>{error}</p>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        ...state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserAction: () => { dispatch(fetchUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);