const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi, how are you ?',
            likes: 15
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likes: 23
        }
    ],
    newPostTxt: ""
};

const profileReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostTxt,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostTxt = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTxt = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNePostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;