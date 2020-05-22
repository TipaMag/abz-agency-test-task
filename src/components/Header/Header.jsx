import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import "./header.sass"
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu-icon.svg'


const Header = () => {
    let [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        onWindowResize()
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        if(!mobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }

    let onWindowResize = () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setMobileMenu(false)
                document.body.style.overflow = 'unset'
            }
        })
    }

    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className={!mobileMenu ? "menu" : "menu menu_active"}>
                    <nav className={!mobileMenu ? "menu__body" : "menu__body menu__body_active"}>
                        <div className="menu__list">
                            <Link className="menu__link" activeClass="menu__link_active" to='about' spy={true} smooth={true} offset={50} duration={500}>
                                About me
                            </Link>
                            <Link className="menu__link" activeClass="menu__link_active" to='relationships' spy={true} smooth={true} offset={50} duration={500}>
                                Relationships
                            </Link>
                            <Link className="menu__link" activeClass="menu__link_active" to='requirements' spy={true} smooth={true} offset={50} duration={500}>
                                Requirements
                            </Link>
                            <Link className="menu__link" activeClass="menu__link_active" to='users' spy={true} smooth={true} offset={50} duration={500}>
                                Users
                            </Link>
                            <Link className="menu__link" activeClass="menu__link_active" to='signUp' spy={true} smooth={true} offset={50} duration={500}>
                                Sign Up
                            </Link>
                        </div>
                    </nav>
                </div>

                <div className="menu-burger" onClick={toggleMobileMenu}>
                    <img className="menu-burger__icon" src={menuIcon} alt="mobileMenu" />
                </div>

            </div>
        </header>
    )
}
export default Header