import  React from 'react';
import classes from './Sidebar.module.css';
import Navbar from "../Navbar/Navbar";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = () => {
    return (
        <div className='app-wrapper-sideBar'>
            <Navbar />
            <FriendsContainer />
        </div>
    )
};

export default Sidebar;