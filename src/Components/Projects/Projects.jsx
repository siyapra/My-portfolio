import React from 'react'
import './Projects.css'
import ProjectCard from '../../common/ProjectCard'

const Projects = () => {
    return (
        <section id='projects' className='container'>
            <h1 className='sectionTitle'>Projects</h1>
            <div className='projectsContainer'>
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects