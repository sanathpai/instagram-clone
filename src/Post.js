import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Sanathpai99" src="/static/images/avatar/1.jpg" />
                <h3>Username</h3>
            </div>
            <img className="post__image" src="https://images.unsplash.com/photo-1558900243-1e6ef4670dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=" " />
            <h4 className="post__text"><strong>Sanathpai99:</strong> what a frikkin idiot!</h4>
        </div>
    )
}

export default Post
