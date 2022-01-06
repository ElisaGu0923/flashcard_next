import * as React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Register: React.FunctionComponent = () => {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const [username, setUserName] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>(undefined);

    const signupRedirect = () => {
        setTimeout(() => {
            signIn('', { callbackUrl: '/dashboard' });
        }, 1500);
    }

    const submitSignUp = async () => {
        if (!username) {
            setMessage('username cannot be empty');
            return;
        } else if (!email) {
            setMessage('email cannot be empty');
            return;
        }
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        })
        if (response.status === 200) {
            if (response.statusText != 'OK') {
                console.log(response.statusText);
                setMessage('Username or email already exists');
            } else {
                console.log('OK');
                setMessage('Sign up success!');
                signupRedirect();
            }
        }
    }

    return (<div>
        <div>Register</div>
        <div>
            <label>Username:</label>
            <input
                type="text"
                name="userName"
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                name="movieName"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                name="review"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
        </div>
        <div>
            <button onClick={submitSignUp}>Sign Up</button>
        </div>
        {message}
    </div>)
}

export default Register;