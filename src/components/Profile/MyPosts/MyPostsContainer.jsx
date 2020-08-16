import  React from 'react';
import { addPostActionCreator, updateNePostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostTxt: state.profilePage.newPostTxt
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNePostTextActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;