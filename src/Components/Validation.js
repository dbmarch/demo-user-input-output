import React from 'react';

const  Validation =  (props) => {
    const validationString = (props.input.length < 5) ? 
        "Text too short" : "Text long enough";

    return (
        <div>
            <p>{validationString}</p>
        </div>
    );
}

export default Validation;