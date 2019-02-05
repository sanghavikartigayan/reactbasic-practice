import React from 'react';

const userInput = (props) => {
    const style = {
        padding: '15px 25px',
        color: 'red',
        
        backgroundcolor: 'blue',
    };

    return <input type ="text" style ={style}
            onChange = {props.changed} value ={props.currentName}/> ;
    
};

export default userInput;