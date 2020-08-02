import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/DialogMessage";

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogsData
        .map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } avatar={ dialog.avatar } />);
    let messagesElements = props.messagesPage.messagesData
        .map( message => <Message message={ message.message } id={ message.id } />);

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ classes.messages }>
                { messagesElements }
            </div>
            <div>
                <textarea
                    value={ props.messagesPage.newMessage }
                    onChange={ onMessageChange }
                />
                <button onClick={ onAddMessage }>add message</button>
            </div>
        </div>
    )
};

export default Dialogs;