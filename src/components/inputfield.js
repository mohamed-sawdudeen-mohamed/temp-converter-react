import React from 'react';

const inputField = (props)=>{
    const {displayText, value, nameId, onChange} = props
    return(
        <div className="input-field">
            <label>{displayText}</label>
            <input type="number" value={value} onChange={onChange} name={nameId} id={nameId} />
        </div>
    )
}

export default inputField;