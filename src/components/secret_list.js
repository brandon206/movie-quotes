import React from 'react';
import auth from '../hoc/auth';

const SecretList = props =>  {
        
    return (
    <div>
        <h1 className = "center">Secret Operatives List</h1>
        <ol>
            <li>Jim</li>
            <li>Lee</li>
            <li>Piper</li>
            <li>James</li>
            <li>Edward</li>
            <li>Harvey</li>
        </ol>
    </div>
);}

export default auth(SecretList);