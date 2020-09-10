import React from 'react'
import AboutMeImage from '../images/about_me.JPG'

function AboutMe() {
    
    const aboutStyle = {
        height: "100%",
        backgroundImage: `url(${AboutMeImage})`
    }
    
    return(
        <div style={aboutStyle}>
            Block About Me
        </div>
    )
}

export default AboutMe;