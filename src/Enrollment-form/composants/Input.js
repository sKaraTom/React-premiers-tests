import React from 'react';

export const SimpleInput = (props) => {
    let placeholder = props.placeholder;
    let value = props.value;
    return (
    <label>
    {props.placeholder}
    <input type="text" value={value} placeholder={placeholder} onChange={props.onChange} id={props.id}/>
    </label>
    )
}