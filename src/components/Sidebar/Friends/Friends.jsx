import  React from 'react';
import classes from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let sideBarFriendsElement = props.friend
        .map( friend => <FriendsItem name={ friend.name } id={ friend.id } avatar={ friend.avatar }/>);
    return (
        <div className={ classes.friendsWrapper }>
            <p>Friends</p>
            <div className={ classes.itemWrapper }>
                { sideBarFriendsElement }
            </div>
        </div>
    )
};

export default Friends;