import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
        <p> Hi, i'm {props.username} </p>
        <p> I'm a budding React Developer</p>
        </div>
    );
};

export default userOutput;