import  React from 'react';
import { addPostActionCreator, updateNePostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNePostTextActionCreator(text));
    };

    return (<MyPosts
        addPost={ addPost }
        updateNewPostText={ onPostChange }
        postsData={ state.profilePage.postsData }
        newPostTxt={ state.profilePage.newPostTxt }
    />)
};

export default MyPostsContainer;