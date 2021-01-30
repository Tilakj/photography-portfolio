import React from 'react'
import home1 from '../img/home1.png'
const AboutSection = () => {
    return (
        <>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                    <div className="hide">
                        <h2>come true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography ideas that you have. We have professional with amazing skills to help you acheive it.</p>
                <button>Contact Us</button>
            </div>
            <img src={home1} alt="Guy with camera" />
        </>

    )
}

export default AboutSection;
