import React from 'react';
import './Button.scss';

interface ButtonProps {
    btnType?: "button"|"submit"|"reset",
    label: String,
    type: String,
    disabled?: boolean,
    clickHandler?: Function
}

function Button(props: ButtonProps) {
    const { btnType = 'button', label, clickHandler, disabled, type } = props;
    return (
        <button type={btnType} className={`btn btn-${type}`} onClick={() => clickHandler()} disabled={disabled}>{label}</button>
    );
}

export default Button;
