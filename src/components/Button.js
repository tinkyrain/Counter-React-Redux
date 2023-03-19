import React from "react";
import './button.css'

const Button = ({ text='text', background, textColor, border='3px solid black', click}) => {

    let btnStyle = {
        border: `${border}`,
        background: `${background}`,
        color: `${textColor}`
    }

    return(
        <input 
            type='button' 
            value={text} 
            className='button' 
            style={btnStyle}
            onClick={click}
        />
    );
}

export default Button;