const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Kosta',
            avatar: 'https://lh3.googleusercontent.com/proxy/YDJWjMtg9aOEsOn0US_IDszrUPNvSOpvz39BfSevTMkKpCZFVa3iI4tjz4SpUIXQZ1BKAYMWruZYHzbV0xqIC_7c4C1ds5_Zi50yXd-YfsT-iQ'
        },
        {
            id: 2,
            name: 'Olly',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYc4VFrffef9Pc49yHFM5hOkE--0iuxIo8jQ&usqp=CAU'
        },
        {
            id: 3,
            name: 'Andrew',
            avatar: 'https://avatars1.githubusercontent.com/u/109951?s=400&v=4'
        }
    ],
    messagesData: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you ?'
        },
        {
            id: 3,
            message: 'yo Yo'
        }
    ],
    newMessage: ''
};

const messagesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: state.newMessage
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
};

export default messagesReducer;