import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;