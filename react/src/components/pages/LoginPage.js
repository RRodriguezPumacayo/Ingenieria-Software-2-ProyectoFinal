import React, { useState } from 'react';
import Authentication from 'utilities/Authentication';
import Events from 'utilities/Events';
import Helper from 'utilities/Helper';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = () => {
        Authentication.login(username, password).then((user) => {
            Events.broadcast('login');
            Helper.Redirect();
        });
    };

    return (
        <div id="log-in">
            <h2>Please log in</h2>
            <p>
                <label>
                    <input type="text">
                        User Name
                    </input>
                </label>
                <input name="name" type="text" value={username} onChange={handleUsernameChange} />
            </p>
            <p>
                <label>
                    <input type="text">
                        Password
                    </input>
                </label>
                <input name="password" type="password" value={password} onChange={handlePasswordChange} />
            </p>
            <button id="login" onClick={login}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;
