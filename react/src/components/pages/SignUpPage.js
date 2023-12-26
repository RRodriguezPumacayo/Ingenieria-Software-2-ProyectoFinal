<<<<<<< HEAD
import React, { useRef } from 'react';
import axios from 'axios';
=======
import $ from 'jquery';
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3
import config from 'Config';
import Events from 'utilities/Events';
import {Helper} from 'utilities/Helper';

<<<<<<< HEAD
export default function SignUpPage() {
    const nameRef = useRef();
    const passwordRef = useRef();
=======
export default class SignUpPage extends React.Component {
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3

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

<<<<<<< HEAD
    const signup = async () => {
        const username = nameRef.current.value;
        const password = passwordRef.current.value;
        try {
            await createUser(username, password);
=======
    signup(){
        const username = this.nameInput.value;
        const password = this.passwordInput.value;

        this.createUser(username, password).then((user) => { 
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3
            Helper.Redirect();
        } catch {
            Helper.Redirect('signup');
<<<<<<< HEAD
        }
=======
        });
    }    
    render() {
        return (
            <div id="sign-up">
                <h2>Sign Up</h2>
                <p>
                    <label htmlFor="name">User Name</label>
                    <input name="name" type="text" id="name" ref={(input) => this.nameInput = input} />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" ref={(input) => this.passwordInput = input} />
                </p>
                <button id="signup" onClick={() => this.signup()}>Sign Up</button>
            </div>
        );
>>>>>>> 90ddf0b2a9f94f0bdc3aed8289299dc14c07ede3
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
