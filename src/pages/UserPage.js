import React, {useEffect} from 'react';
import UserUpdateCard from "../components/UserUpdateCard";
import Posts from "../components/Posts";
import AlertMessage from "../components/AlertMessage";
import {useDispatch, useSelector} from "react-redux";
import {updateLoggedInUser} from "../features/user";


const UserPage = () => {

    const dispatch = useDispatch();
    const loggedInUser = useSelector(state=>state.user.loggedInUser);
    console.log(loggedInUser);
   const ifAgree = localStorage.getItem('agreement');
    console.log(typeof  ifAgree);

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                "content-type":"application/json",
                authorization : localStorage.getItem('TOKEN')
            }
        }
        if(ifAgree==='true') fetch('http://localhost:8000/getUserInfo', options)
            .then(res=>res.json()).then(data=> dispatch(updateLoggedInUser(data.data)))
    }, []);


    return (
        <div className="userPage">
            {ifAgree==='false' && loggedInUser && <AlertMessage/>}
        {/*<AlertMessage/>*/}
            <UserUpdateCard/>
            <Posts />
        </div>
    );
};

export default UserPage;