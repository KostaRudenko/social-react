import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = ( props ) => {
    let dialogPath = `/dialogs/${props.id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img className={classes.avatar} src={props.avatar} alt=""/>
            <NavLink to={dialogPath}> {props.name} </NavLink>
        </div>
    )
};

export default DialogItem;