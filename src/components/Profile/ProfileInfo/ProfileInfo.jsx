import  React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://pix10.agoda.net/hotelImages/4599927/-1/a1e824eeb9c9e0e48c040182ad670e62.jpg?s=1024x768"
                    alt=""
                />
            </div>

            <div className={classes.descriptionWrapper}>ava + desc</div>

        </div>
    )
};

export default ProfileInfo;