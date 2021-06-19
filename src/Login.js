import React from 'react';
import "./Login.css";
import StateProvider from "./StateProvider.js";
// material UI imports
// import {Button} from "material-ui/core";
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import {useStateValue} from "./StateProvider.js"


function Login() {
    // pulling from the database.
// the empty {} is actually the state, we dont neeed to destructure it yet.
// dispatch is like a gun, which we fire to change the state and shit

    const [{}, dispatch] = useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER, 
                user: result.user,
            })
        }
        ).catch(error => alert(error.message));
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
