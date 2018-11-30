import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
    return (
        <div className = "input-field">
            <input {...input} id = {input.name} type="text"/>
            <label htmlFor = {input.name}>{label}</label>
            <p className="red-text text-darken-2">{touched && error}</p>
        </div>
    );
}