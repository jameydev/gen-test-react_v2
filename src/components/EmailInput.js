import React, { useState } from 'react';

export default function EmailInput() {
    const [errorMsg, setErrorMsg] = useState('');

    const evaluateEmail = event => {
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
            setErrorMsg('The email entered is invalid.');
        }
        else {
            setErrorMsg('');
        }
    };

    return (
        <div>
            <input 
                type="email" 
                placeholder="you@email.com" 
                onBlur={evaluateEmail} 
            />
            <p>{errorMsg}</p>
        </div>
    );
}