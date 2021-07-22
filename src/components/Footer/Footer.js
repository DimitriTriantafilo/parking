import React from 'react'
import gitHub from './gitHubP.png'
import './footer.css'
import linkedIn from './linkedInP.png'
function Footer(){
    return(
        <div className="about-me">
            <a href="https://github.com/DimitriTriantafilo" target="_blank" rel="noreferrer"><img width="40rem" src={gitHub} alt=""></img></a>
            <a href="https://www.linkedin.com/in/dimitri-triantafilo/" target="_blank" rel="noreferrer"><img width="110rem" src={linkedIn} alt=""></img></a>
        </div>
    )
}
export default Footer