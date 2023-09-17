import React from 'react';
import {useState} from "react";

const AlertMessage = () => {

    const[modalVisibility, setModalVisibility] = useState('block');

    function handleAgreement(event) {
        localStorage.setItem('auto-save', event.target.checked)
    }


    return (
        <div className="alertMessageDiv" style={{display: modalVisibility}}>
            <div className="alertMessage">
                <span onClick={() => setModalVisibility('none')} className="close">X</span>
                <label htmlFor="stay">Stay logged in?</label>
                <input onChange={handleAgreement} id="stay" type="checkbox"/>
            </div>

        </div>
    );
};

export default AlertMessage;