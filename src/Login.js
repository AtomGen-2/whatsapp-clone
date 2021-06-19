import React from 'react';
import "./Login.css";
// material UI imports
// import {Button} from "material-ui/core";
import { Button } from '@material-ui/core';

function Login() {
    const signIn=()=>{

    }
    return (
        <div className = "login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="image1" width="150" height="150"/>
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
