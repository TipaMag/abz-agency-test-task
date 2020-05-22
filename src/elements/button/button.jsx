import React from 'react'
import './button.sass'

const Button = ({ label, handleClick, styleType, type, position, disabled }) => {
    const classes = `btn ${styleType}`
    const styles = {
        margin: '0 auto'
    }

    return (
        <button className={classes} style={position && styles}
            type={type}
            onClick={handleClick} 
            disabled={disabled}
        >
            {label}
        </button>
    )
}
export default Button