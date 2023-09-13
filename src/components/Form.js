import React, {useState} from 'react';
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateLoggedInUser} from "../features/user";

const Form = ({page}) => {

    const usernameRef = useRef();
    const passRef = useRef();
    const repeatPassRef = useRef();
    const [error, setError] = useState();
    const nav = useNavigate();
    const dispatch = useDispatch();

    async function register() {
       if(!usernameRef.current.value) return setError('username cannot be empty')
       if(!passRef.current.value) return setError('password cannot be empty')
       if(passRef.current.value !== repeatPassRef.current.value) return setError('passwords should match');
       const user = {
           username: usernameRef.current.value,
           pass1: passRef.current.value,
           pass2: repeatPassRef.current.value,
       }
       const options = {
           method: 'POST',
           headers: {
               "content-type":"application/json"
           },
           body: JSON.stringify(user)
       }
       try {
           const res = await fetch('http://localhost:8000/register', options);
           const data = await res.json();
           console.log('data', data);
           setError(data.message);
           if(!data.error) {
               usernameRef.current.value = '';
               passRef.current.value = '';
               repeatPassRef.current.value = '';
               setError();
               nav('/login');
           }
       } catch (e) {
            console.log('error', e)
        }
    }
    async function login() {
        if(!usernameRef.current.value) return setError('username cannot be empty');
        if(!passRef.current.value) return setError('password cannot be empty');
        const user = {
            username: usernameRef.current.value,
            password: passRef.current.value,
        }
        const options = {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        }
        try {
            const res = await fetch('http://localhost:8000/login', options);
            const data = await res.json();
            setError(data.message);
            console.log('data', data);
            if(!data.error) {
                console.log('i am inside if data error false')
                dispatch(updateLoggedInUser(data.data));
                usernameRef.current.value = '';
                passRef.current.value = '';
                setError();
                nav('/user');
            }
        } catch (e) {
            console.log('error', e)
        }
    }

    return (
        <div className="box">
            <h1>{page}</h1>
            <input type="text" ref={usernameRef} placeholder="Your username"/>
            <input type="text" ref={passRef} placeholder="Your password"/>
            {page==='Register' && <input type="text" ref={repeatPassRef} placeholder="Repeat password"/>}
            {error && <div className="error">{error}</div>}
            <button onClick={page==='Register' ? register : login}>{page}</button>
        </div>
    );
};

export default Form;