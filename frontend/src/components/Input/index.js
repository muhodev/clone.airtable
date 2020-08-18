import React from 'react'

function Input(props) {
    return (
        <div className={`input__control ${props.className}`}>
            {props.label &&
                <label className="subtitle">
                    {props.label}
                </label>
            }
            <input
                type={props.type || "text"}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                className="input"
            />
        </div>
    )
}

export default Input