import React from 'react'
import './about.sass'
import aboutImg from '../../assets/man-laptop-v1.svg'
import Button from '../../elements/button/button'
import { scroller } from 'react-scroll'

const About = () => {

    const handleClick = () => {
        scroller.scrollTo('signUp', {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 50, // Scrolls to element + 50 pixels down the page
          })
    }
    
    return (
        <section className="about" id="about">
            <h1 className="about__title">Let's get acquainted</h1>
            <div className="about__content">
                <div className="about__image">
                    <img src={aboutImg} alt="about" />
                </div>
                <div className="about__text">
                    <h2 className="about__subtitle">I am cool frontend developer</h2>
                    <p className="about__description">
                        We will evaluate how clean your approach to writing CSS and Javascript
                        code is. You can use any CSS and Javascript 3rd party libraries without any
                        restriction.
                    <br /><br />
                        If 3rd party css/javascript libraries are added to the project via
                        bower/npm/yarn you will get bonus points. If you use any task runner
                        (gulp/webpack) you will get bonus points as well. Slice service directory
                        page P​SD mockup​ into HTML5/CSS3.
                    </p>
                    <Button handleClick={handleClick}
                        label="Sign up now"
                    />
                </div>
            </div>
        </section>
    )

}

export default About