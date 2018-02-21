import React from 'react';

export const Select = (props) => {
    let value = props.value;
    return (
    <label>
    {props.label}
            <select value={value} onChange={props.onChange} id={props.id}>
              <option value="homme">homme</option>
              <option value="femme">femme</option>
              <option value="chaise de jardin">chaise de jardin</option>
              <option value="indéterminé">indéterminé</option>
            </select>
    </label>
    )
}