import React from 'react';
import {useDispatch} from "react-redux";
import {updateLoggedInUser} from "../features/user";

const SinglePost = ({post, loggedInUser}) => {

    const dispatch = useDispatch();

    async function deletePost() {
        const postToDelete = {
            title : post.title
        }
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem('TOKEN')
            },
            body: JSON.stringify(postToDelete)
        }
        const res = await fetch('http://localhost:8000/deletePost',options);
        const data = await res.json();
        dispatch(updateLoggedInUser(data.data));
    }

    return (
        <div className="singlePost">
            <img src={post.postImage} alt=""/>
            <h3>Title: {post.title}</h3>
            <h4>Author: {loggedInUser.username}</h4>
            <button onClick={deletePost}>DELETE POST</button>
        </div>
    );
};

export default SinglePost;