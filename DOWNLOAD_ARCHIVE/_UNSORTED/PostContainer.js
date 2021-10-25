import React, { Component } from 'react';

const PostContainer = (props) => {
    //props.map((post) => {
        return (
            <div>{props[0]}</div>
            // <li>
            //     <div>{post.username}</div>
            //     <img src={post.imageUrl} />
            //     <div>{post.likes} likes</div>
            //     <div>{post.comments.length} comments</div>
            //     <div>{post.timestamp}</div>
            // </li>
        );
    //});
};

export default PostContainer;