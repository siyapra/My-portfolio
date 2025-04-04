import React from 'react'
import './skills.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'
const Skills = () => {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

    return (
        <>
            <div className='skillsList'>
                <h1 className="sectionTitle">Skills</h1>

            </div>
            <div className="skillsList">
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>HTML</p>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>CSS</p>
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>Javascript</p>
            </div>
            <hr />
            <div className="skillsList">
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <p>Bootstrap</p>
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>Figma</p>
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>PS</p>
            </div>
            <hr />
            <div className="skillsList">

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <p>Git</p>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon'/>
                <p>GitHub</p>
            </div>
        </>
    )
}



export default Skills