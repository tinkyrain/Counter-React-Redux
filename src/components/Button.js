import React from "react";
import './button.css'

const Button = ({ text, background, textColor, borderColor }) => {

    let btnStyle = {
        border: `${borderColor}`,
        background: `${background}`,
        color: `${textColor}`
    }

    return(
        <input 
            type='button' 
            value={text} 
            class='button' 
            style={btnStyle}
        />
    );
}

export default Button;