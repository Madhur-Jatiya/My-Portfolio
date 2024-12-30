import React from 'react'
import "./Button.css"

function Button({
    value,
    onClick,
    className,
    icon,
}) {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {value}
            {icon}
        </button>
    )
}

export default Button