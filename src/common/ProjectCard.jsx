import React from 'react'
import Viberr from '../assets/viberr.png'
import burger from '../assets/fresh-burger.png'
import hipsster from '../assets/hipsster.png'
import Fitlift from '../assets/fitlift.png'
const ProjectCard = () => {
    return (
        <>

            <a href="https://e-commerce-bcfo.onrender.com/" target='_blank'>
                <img className='hovers' src={Viberr} alt="Viberr logo" />
                <h3>Viberr</h3>
                <p>Streaming App</p>
            </a>

            <a href="https://github.com" target='_blank'>
                <img className='hovers' src={burger} alt="Viberr logo" />
                <h3>Fresh Burger</h3>
                <p>Hamburger Restaurant</p>
            </a>
            <a href="https://tirp-planner.onrender.com/" target='_blank'>
                <img className='hovers' src={hipsster} alt="Viberr logo" />
                <h3>Hipsster</h3>
                <p>Glasses Shop</p>
            </a>
            <a href="https://github.com" target='_blank'>
                <img className='hovers' src={Fitlift} alt="Viberr logo" />
                <h3>FitLift</h3>
                <p>Fitness App</p>
            </a>
        </>
    )
}

export default ProjectCard