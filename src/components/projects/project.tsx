import React, { useEffect } from 'react';
import content from '../../content.json';
import './project.css';
import VanillaTilt from 'vanilla-tilt';
import { FaToolbox } from 'react-icons/fa';
import { SiNetflix, Si30Secondsofcode } from 'react-icons/si';
import ScrollAnimation from '../../common/ScrollAnimation';

const Projects: React.FC = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('.tilt');
        VanillaTilt.init(Array.from(elements) as HTMLElement[], {
            max: 15,
            speed: 800,
            glare: true,
            'max-glare': 0.5,
        });
    }, []);

    const getIconForProject = (projectName: string) => {
        switch (projectName) {
            case "Netflix Clone":
                return <SiNetflix size={32} color="#F05032" />;
            case "My Portfolio":
                return <Si30Secondsofcode size={32} color="#000000" />;
            default:
                return <FaToolbox size={32} color="#000000" />;
        }
    };

    return (
        <div className="projects px-4">
            <ScrollAnimation>
                <h2 className="project-title">My Projects</h2>
                <h6>Here are some of the projects I've worked on.</h6>
                <br />
                <div className="row" style={{ padding: '2.5rem' }}>
                    {content.projects.map((project, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 tilt project-card">
                                <div className="card-body">
                                    <h3 className="card-title">{getIconForProject(project.name)}{project.name}</h3>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollAnimation>
        </div>
    );
};

export default Projects;