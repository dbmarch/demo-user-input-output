import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
}


const  Char =  (props) => {
    return (
        <div style={style}>
             <p onClick = {props.click}> {props.char} </p>
        </div>
    );
}

export default Char;