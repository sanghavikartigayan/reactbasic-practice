import React from 'react';

const validationComponent =(props) => {
    let Msg ="Text too long";

    if(props.inputlength <= 5)
    Msg = "Text too short";

    return (
        <div>
            <p>{Msg}</p>
        </div>
    );
};

export default validationComponent;