import React from 'react'
import Viberr from '../assets/viberr.png'
import burger from '../assets/fresh-burger.png'
import hipsster from '../assets/hipsster.png'
import Fitlift from '../assets/fitlift.png'
const ProjectCard = () => {
    return (
        <>
            <a href="https://the-fitness-collage.netlify.app/" target='_blank'>
                <img className='hovers' src={Fitlift} alt="Viberr logo" />
                <h3>FitLift</h3>
                <h3 className='text-adjust'>Fitness App</h3>
            </a>

            <a href="https://hippster.netlify.app/" target='_blank'>
                <img className='hovers' src={hipsster} alt="Viberr logo" />
                <h3>Hipsster</h3>
                <h3 className='text-adjust'>Glasses Shop</h3>
            </a>
            <a href="https://karisitascollage.netlify.app/" target='_blank'>
                <img className='hovers' src={burger} alt="Viberr logo" />
                <h3>Fresh Burger</h3>
                <h3 className='text-adjust'>Hamburger Restaurant</h3>
            </a>
            <a href="https://tirp-planner.onrender.com/" target='_blank'>
                <img className='hovers' src={Viberr} alt="Viberr logo" />
                <h3>Viberr</h3>
                <h3 className='text-adjust'>Streaming App</h3>
            </a>




        </>
    )
}

export default ProjectCard