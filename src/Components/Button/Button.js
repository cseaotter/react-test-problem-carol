import React from 'react'
import "./Button.css"
import {ReactPropTypes} from "react";
import PropTypes from 'prop-types';

function Button({label, backgroundColor = "red", size = "medium", handleClick}) {
    let scale = 1
    if (size === "small") scale = 0.75
    if (size === "large") scale = 1.5
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale}rem`,
        border: "none",
    }
    return (
        <button onClick={handleClick} style={{style}}>
            {label}
        </button>
    )
}
Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    onClick: PropTypes.func,
}
export default Button;
