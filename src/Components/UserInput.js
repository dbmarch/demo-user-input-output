import React from 'react';
const style = {
    width: '60%',
    margin: '16px auto',
    border: '3px solid #257D51',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'left',
    backgroundColor: '#DFF1E8',
    borderRadius: '8px'
}
const  UserInput =  (props) =>{
    return (
        <div style = {style}>
        <label> Username: </label>
        <input id="Username" type = 'text' 
        placeholder='Enter Name' value = {props.username}
        onChange = {props.userInput} />
        </div>
    )
}





export default UserInput;