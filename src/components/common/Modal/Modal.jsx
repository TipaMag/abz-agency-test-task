import React from 'react'
import './modal.sass'

const Modal = ({setModalIsOpen}) => {
    return (
        <div className="modal">
            <div className="modal__body">
                <h2 className="modal__title">Congratulations</h2>
                <p className="modal__description">You have successfully passed the registration'</p>

                <div className="modal__controls">
                    <button className="modal__btn" onClick={() => setModalIsOpen(false)}>Great</button>
                </div>
            </div>
        </div>
    )
}

export default Modal