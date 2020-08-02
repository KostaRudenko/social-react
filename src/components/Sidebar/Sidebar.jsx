import  React from 'react';
import classes from './Sidebar.module.css';
import Navbar from "../Navbar/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className='app-wrapper-sideBar'>
            <Navbar />
            <Friends state={ props.state.friend } />
        </div>
    )
};

export default Sidebar;