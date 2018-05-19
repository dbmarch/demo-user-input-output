import React from 'react';

const style = {
    width: '60%',
    margin: '16px auto',
    border: '3px solid #25257D',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#EEF',
    borderRadius: '8px'
}


const  UserOutput =  (props) => {
    return (
        <div style={style}>
            <p className='Username'> {props.username} </p>

            <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
</p>
        </div>
    );
}

export default UserOutput;