import  React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData
        .map( post => <Post message={ post.message } key={ post.id } likes={ post.likes } id={ post.id }/> );

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
            <div className={ classes.postsWrapper }>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea
                            value={ props.newPostTxt }
                            onChange={ onPostChange }
                        />
                    </div>
                    <div>
                        <button onClick={ onAddPost }>add button</button>
                    </div>

                </div>

                <div className={ classes.posts }>
                    { postsElements }
                </div>
            </div>
    )
};

export default MyPosts;