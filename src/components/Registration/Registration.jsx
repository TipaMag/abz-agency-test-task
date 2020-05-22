import React, { useState, useEffect } from 'react'
import { api } from '../../api/api'
import './registration.sass'

import Modal from '../common/Modal/Modal'
import RegistrationForm from './Form/Form'

const Registration = ({getUsersData}) => {
    let [modalIsOpen, setModalIsOpen] = useState(false)
    let [positions, setPositions] = useState([])

    useEffect(() => {
        const getPositionsData = async () => {
            setPositions(await api.getPositions())
        }
        getPositionsData()
    }, [])

    const onHandleSubmit = async (formData) => {
        let response = await api.userRegistration(formData)
        if (response.success) {
            getUsersData()
            setModalIsOpen(true)
        }
    }

    return (
        <section className="registration" id="signUp">
            <h1 className="registration__title">Register to get a work</h1>
            <RegistrationForm positions={positions} onHandleSubmit={onHandleSubmit}/>
            {modalIsOpen
                && <Modal setModalIsOpen={setModalIsOpen}></Modal>
            }
        </section>
    )
}
export default Registration