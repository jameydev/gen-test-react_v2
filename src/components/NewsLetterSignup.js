import { useState } from 'react';

export default function NewsLetterSignup() {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    
    const updateEmailHandler = event => {
        // need email validation here
        setEmail(event.target.value);
    };

    const updateAgreedHandler = event => {
        setAgreed(event.target.checked);
    };

    const signupHandler = event => {
        event.preventDefault();
        
        const userData = {
            userEmail: email,
            userAgrees: agreed
        };

        // do something
    };

    return (
        <form onSubmit={signupHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={updateEmailHandler} />
            </div>
            <div>
                <input type="checkbox" id="agree" onChange={updateAgreedHandler} />
                <label htmlFor="agree">I agree to receive emails from you</label>
            </div>
            <button type="submit">Sign up</button>
        </form>
    );
}