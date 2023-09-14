import React from 'react';
import {NavLink} from "react-router-dom";
import {updateLoggedInUser} from "../features/user";
import {useDispatch, useSelector} from "react-redux";

const Nav = () => {

    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const dispatch = useDispatch();

    function handleLogOut() {
        dispatch(updateLoggedInUser(null))
    }

    return (
        <>
            <div className="nav">
                <div className="navLeft">
                    <NavLink to='/login' className='link' >
                        <div>LOGIN</div>
                    </NavLink>
                    <NavLink className='link' to='/' >
                        <div>REGISTRATION</div>
                    </NavLink>
                    <NavLink className="link" to='/user' >
                        <div>ACCOUNT</div>
                    </NavLink>
                </div>
                <div className="navRight">
                    {loggedInUser &&
                        <NavLink className="link" to='/login' >
                            <div onClick={handleLogOut}>LOG OUT</div>
                        </NavLink>}

                </div>

            </div>
        </>

    );
};

export default Nav;