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
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>HTML</h3>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>CSS</h3>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>Javascript</h3>
            </div>
            <hr />
            <div className="skillsList">
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>Bootstrap</h3>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>Tailwind css</h3>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>PS</h3>
            </div>
            <hr />
            <div className="skillsList">
                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>Git</h3>

                <img src={checkMarkIcon} alt="Checkmark icon" className='logo-icon' />
                <h3 className='text-force'>GitHub</h3>
            </div>
        </>
    )
}



export default Skills