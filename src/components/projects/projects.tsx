import React from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Project One',
        description: 'This is the description for project one.',
        link: 'https://example.com/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is the description for project two.',
        link: 'https://example.com/project-two'
    }
];

const Projects: React.FC = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;