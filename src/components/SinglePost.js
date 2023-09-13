import React from 'react';

const SinglePost = ({post,author}) => {
    return (
        <div className="singlePost">
            <img src={post.postImage} alt=""/>
            <h3>Title: {post.title}</h3>
            <h4>Author: {author}</h4>
        </div>
    );
};

export default SinglePost;