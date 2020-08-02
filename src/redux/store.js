import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
        },
        sideBar: {
            friend: [
                {
                    name: 'YouMe',
                    id: 1,
                    avatar: 'https://www.meme-arsenal.com/memes/13a0102a999b7734de42f96eca2f9d84.jpg'
                },
                {
                    name: 'Vasia',
                    id: 2,
                    avatar: 'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-cute-pug-avatar-with-a-yellow-background-png-image_1873433.jpg'
                },
                {
                    name: 'Kid',
                    id: 3,
                    avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d307b93b-2d69-476d-8010-d70b50e07650/d8x5m3v-84f2d040-2e09-439a-8462-9bb8102d7edc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDMwN2I5M2ItMmQ2OS00NzZkLTgwMTAtZDcwYjUwZTA3NjUwXC9kOHg1bTN2LTg0ZjJkMDQwLTJlMDktNDM5YS04NDYyLTliYjgxMDJkN2VkYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1BYao5y4thWz4_n5j1xQt75fAIuscgSu3NOF_zO9CB8'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State Changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber();
    }
};

export default store;

window.store = store;