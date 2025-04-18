import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Main from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className='container'>
            <div className='colorModeContainer'>
                <img
                    src={heroImg}
                    className='hero'
                    alt="Profile picture of Harris Johnsen"
                />
                <img
                    className='colorMode'
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className='info'>
                <h1>
                    Sitaram
                    <br />
                    Prajapat
                </h1>
                <h2>Web Designer</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <span className='text-span'>
                    <h2 className='description'>
                        With a passion for developing modern React web apps for commercial
                        businesses.
                    </h2>
                </span>

                <a href={Main} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>


    );
}

export default Hero;