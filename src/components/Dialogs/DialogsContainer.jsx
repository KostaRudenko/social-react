import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (<Dialogs
        updateNewMessage={ onMessageChange }
        addMessage={ addMessage }
        messagesPage={ state.messagesPage }
    />)
};

export default DialogsContainer;