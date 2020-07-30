import  React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNePostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map( post => <Post message={ post.message } likes={ post.likes } id={ post.id }/> );

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNePostTextActionCreator(text));
    };

    return (
            <div className={ classes.postsWrapper }>
                <h3>My Posts</h3>

                <div>
                    <div>
                        <textarea
                            onChange={ onPostChange }
                            value={ props.newPostTxt }
                        />
                    </div>

                    <div>
                        <button onClick={ addPost }>add button</button>
                    </div>

                </div>

                <div className={ classes.posts }>
                    { postsElements }
                </div>
            </div>
    )
};

export default MyPosts;