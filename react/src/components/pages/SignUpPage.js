import React, { useRef } from 'react';
import axios from 'axios';
import config from 'Config';
import Events from 'utilities/Events';
import {Helper} from 'utilities/Helper';

export default function SignUpPage() {
    const nameRef = useRef();
    const passwordRef = useRef();

    const createUser = async (username, password) => {
        try {
            const response = await axios.post(config.apiURL + "/user", { username, password });
            Events.broadcast('notification', 'User added', 'success');
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 403) {
                Events.broadcast('notification', 'That username already exists. Please choose a different username', 'error');
            } else {
                Events.broadcast('notification', 'Error signing up', 'error');
            }
            throw error;
        }
    }

    const signup = async () => {
        const username = nameRef.current.value;
        const password = passwordRef.current.value;
        try {
            await createUser(username, password);
            Helper.Redirect();
        } catch {
            Helper.Redirect('signup');
        }
    }

    return (
        <div id="sign-up">
            <h2>Sign Up</h2>
            <p>
                <label>User Name<input name="name" type="text" ref={nameRef}/>
                </label>
            </p>
            <p>
                <label>Password<input name="password" type="password" ref={passwordRef}/></label>
            </p>
            <button id="signup" onClick={signup}>Sign Up</button>
        </div>
    );
}
