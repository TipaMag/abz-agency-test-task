import React from 'react'
import { scroller } from 'react-scroll'
import "./banner.sass"

import Button from '../../elements/button/button'


export default () => {

    const handleClick = () => {
        scroller.scrollTo('signUp', {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 50, // Scrolls to element + 50 pixels down the page
          })
    }

    return (
        <section className="banner">
            <div className="banner__content">
                <h1 className="banner__title">
                    Test assignment <br />
                    for Frontend <br />
                    Developer position
                </h1>
                <p className="banner__description">
                    We kindly remind you that your test assignment should be submitted
                    as a link to github/bitbucket repository. Please be patient, we consider
                    and respond to every application that meets minimum requirements.
                    We look forward to your submission. Good luck! The photo has to scale
                    in the banner area on the different screens
                </p>
                <Button handleClick={handleClick}
                    label='Sign up now'
                    styleType='btn__primary'
                />
            </div>
        </section>
    )
}