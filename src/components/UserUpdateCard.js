import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {updateLoggedInUser} from "../features/user";
import {useNavigate} from "react-router-dom";

const UserUpdateCard = () => {

    const loggedInUser = useSelector(state => state.user.loggedInUser);
    console.log(loggedInUser);
    const updatePhotoRef = useRef();
    const dispatch = useDispatch();
    const nav = useNavigate();

    async function updatePhoto() {
        const user = {
            id: loggedInUser._id,
            photo: updatePhotoRef.current.value
        }
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }
        const res = await fetch('http://localhost:8000/updatePhoto', options);
        const data = await res.json();
        dispatch(updateLoggedInUser(data.data))
    }

    return (
        <>

            {loggedInUser ? <div className="box">
                    <div>
                        <img src={loggedInUser.photo} alt=""/>
                        <h1>Welcome {loggedInUser.username}!</h1>
                    </div>
                    <input type="text" ref={updatePhotoRef} defaultValue={loggedInUser.photo}/>
                    <button onClick={updatePhoto}>UPDATE PHOTO</button>
                </div>
                :
                <div className="box">
                    <h2>NO USER IS LOGGED IN</h2>
                    <button onClick={() => nav("/login")}>GO TO LOGIN</button>
                </div>}
        </>
    );
};

export default UserUpdateCard;