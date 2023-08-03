import { useState } from "react";

export default function LoginForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const emailEnteredHandler = event => {
        setEnteredEmail(event.target.value);
    };

    const passwordEnteredHandler = event => {
        setEnteredPassword(event.target.value);
    };

    return (
        <form action="#">
            <input
                type="email"
                placeholder="you@email.com"
                onBlur={emailEnteredHandler}
            />
            <input
                type="password"
                placeholder="Your password"
                onBlur={passwordEnteredHandler}
            />
        </form>
    );
}