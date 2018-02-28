import React from 'react';

/**
 * un simple input text qui récupère ses paramètres depuis le parent.
 * 
 * @param placeholder : placeholder et label
 *        value : saisie
 *        isRequired : true ou "" si champ non requis.
 *        id : id de l'input.
 *  
 */
export const InputText = (props) => {
    const placeholder = props.placeholder;
    const value = props.value;
    const isRequired = props.required;
    let formValid = "is-invalid";
    value !== "" ? formValid = "is-valid" : formValid = "is-invalid";
    return (
    <label>
        {props.placeholder}{isRequired ? "*" : "" }
        <input className={'form-control '+ formValid} type="text" value={value} placeholder={placeholder} onChange={props.onChange} id={props.id} name={props.name} required={props.isRequired}/>
        <div className="invalid-feedback">
        not good!
        </div>
        <div className="valid-feedback">
        good!
        </div>
    </label>

    )   
}