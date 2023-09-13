import React from 'react';
import UserUpdateCard from "../components/UserUpdateCard";
import Posts from "../components/Posts";

const UserPage = () => {
    return (
        <div className="userPage">
            <UserUpdateCard/>
            <Posts />
        </div>
    );
};

export default UserPage;