import React, { useState, useRef, useEffect } from 'react'
import './card.sass'

import defaultPhoto from '../../../assets/photo-cover.svg'
import Tooltip from '@material-ui/core/Tooltip'

const Card = ({ user }) => {
    const [isOverflowed, setIsOverflow] = useState(false)
    const textElementRef = useRef()

    useEffect(() => {
        setIsOverflow(textElementRef.current.scrollWidth > textElementRef.current.clientWidth)
    }, [])

    return (
        <div className="user-card" key={user.id}>
            <img className="user-card__image" src={user.photo || defaultPhoto} alt="user-img" />
            <Tooltip title={user.name} disableHoverListener={!isOverflowed}>
                <h2 className="user-card__name">{user.name}</h2>
            </Tooltip>
            <p className="user-card__position">{user.position}</p>
            <Tooltip title={user.email} disableHoverListener={!isOverflowed}>
                <p ref={textElementRef} className="user-card__email" >{user.email}</p>
            </Tooltip>
            <p className="user-card__phone">{user.phone}</p>
        </div>
    )
}

export default Card