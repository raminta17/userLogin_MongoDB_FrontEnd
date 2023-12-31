import React from 'react';
import SinglePost from "./SinglePost";
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import {updateLoggedInUser} from "../features/user";

const Posts = () => {


    const titleRef = useRef();
    const imageRef = useRef();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const [error, setError] = useState();

    async function savePost() {
        const post = {
            title: titleRef.current.value,
            postImage: imageRef.current.value
        }
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem('TOKEN')
            },
            body: JSON.stringify(post)
        }
        const res = await fetch('http://localhost:8000/savePost', options);
        const data = await res.json();
        if (data.error) return setError(data.message);
        dispatch(updateLoggedInUser(data.data));
        titleRef.current.value = '';
        imageRef.current.value = '';
        setError();
    }

    return (
        <>
            {loggedInUser && <div className="box postsCont">
                <h3>Write a post</h3>
                <div className="form">
                    <input type="text" ref={titleRef} placeholder="Post title"/>
                    <input type="text" ref={imageRef} placeholder="Image url"/>
                    <button onClick={savePost}>POST</button>
                </div>
                <div className="error">{error}</div>
                {loggedInUser.posts && <div className="posts">
                    {loggedInUser.posts.map((post, index) =>
                        <SinglePost
                            key={index}
                            loggedInUser={loggedInUser}
                            post={post}
                            />)}
                </div>}
            </div>}
        </>
    );
};

export default Posts;