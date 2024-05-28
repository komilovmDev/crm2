import React, { useState } from 'react';
import './DeleteModal.css';
import { IoCloseOutline } from "react-icons/io5";

const DeleteModal = ({ onCancel, onDelete }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [modalActive, setModalActive] = useState(true); // Состояние для управления классом модального окна

    const handleDelete = () => {
        setShowConfirmation(true);
        setModalActive(false); // Первому модальному окну присваивается класс "active"
        setTimeout(() => {
            setShowConfirmation(false);
            setModalActive(true); // После истечения времени класс "active" снова присваивается первому модальному окну
        }, 3000);
    };

    return (
        <div className={`modal ${modalActive ? 'active' : ''}`}>
            <div className="closeX" onClick={onCancel}><IoCloseOutline /></div>
            <div className="modal-content">
                <h2>Delete selected applications ?</h2>
                <p>Are you sure you want to delete all selected applications ?</p>
                <div className="modal-buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button id='del' onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {showConfirmation && <ConfirmationModal onCancel={() => setShowConfirmation(false)} />}
        </div>
    );
};

const ConfirmationModal = ({ onCancel }) => {
    return (
        <div className="confirmation-modal">
            <div className="confirmation-content">
                <h2>Deleting...</h2>
                <button onClick={onCancel}>Close</button>
            </div>
        </div>
    );
};

export default DeleteModal;
