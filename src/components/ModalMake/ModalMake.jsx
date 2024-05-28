import React from 'react';
import './ModalMake.css';
import { IoCloseOutline } from "react-icons/io5";

const ModalMake = ({ onClose, onYes }) => {
    return (
        <div className="modal">
            <div className="closeX" onClick={onClose}><IoCloseOutline /></div>
            <div className="modal-content">
                <h2>Generate leads
                    through all applications</h2>
                <p>Are you sure you want to generate leads through all applications ?</p>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button id='Yes' onClick={onYes}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default ModalMake;