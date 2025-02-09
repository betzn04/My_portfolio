import React, { useEffect } from 'react';
import content from '../../content.json';
import './projects.css';
import VanillaTilt from 'vanilla-tilt';
import { FaReact, FaNodeJs, FaToolbox } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiGnubash, SiMysql, SiMongodb, SiExpress, SiTailwindcss, SiGit, SiGithubactions, SiVercel, SiLinux, SiNetflix } from 'react-icons/si';



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
    return (
        <div className="container">
            <h2 className="my-4 project-title">Technology</h2>
            <h6>Here's what I typically work with.</h6>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100 tech-card">
                        <div className="card-body">
                            <h3 className="card-title">Frontend</h3>
                            <div className="tech-icons">
                                <div className="tech-icon" title="React"><FaReact size={32} color="#61DBFB" /></div>
                                <div className="tech-icon" title="TailWind CSS"><SiTailwindcss size={32} /></div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 tech-card">
                        <div className="card-body">
                            <h3 className="card-title">Backend</h3>
                            <div className="tech-icons">
                                <div className="tech-icon" title="Node.js"><FaNodeJs size={32} color="#68A063" /></div>
                                <div className="tech-icon" title="Express"><SiExpress size={32} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 tech-card">
                        <div className="card-body">
                            <h3 className="card-title">Database</h3>
                            <div className="tech-icons">
                                <div className="tech-icon" title="MySQL"><SiMysql size={32} color="#4479A1" /></div>
                                <div className="tech-icon" title="MongoDB"><SiMongodb size={32} color="#47A248" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 tech-card">
                        <div className="card-body">
                            <h3 className="card-title">Languages</h3>
                            <div className="tech-icons">
                                <div className="tech-icon" title="JavaScript"><SiJavascript size={32} color="#F7DF1E" /></div>
                                <div className="tech-icon" title="TypeScript"><SiTypescript size={32} color="#007ACC" /></div>
                                <div className="tech-icon" title="Bash"><SiGnubash size={32} color="#4EAA25" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 tech-card">
                        <div className="card-body">
                            <h3 className="card-title">Tools</h3>
                            <div className="tech-icons">
                                <div className="tech-icon" title="Git"><SiGit size={32} color="#F05032" /></div>
                                <div className="tech-icon" title="GitHub Actions"><SiGithubactions size={32} color="#2088FF" /></div>
                                <div className="tech-icon" title="Vercel"><SiVercel size={32} color="#000000" /></div>
                                <div className="tech-icon" title="Linux"><SiLinux size={32} color="#FCC624" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="my-4 project-title">My Projects</h2>
            <div className="row">
                {content.projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 tilt project-card">
                            <div className="card-body">
                                <h3 className="card-title"><SiNetflix size={32} color="#F05032" />{project.name}</h3>
                                <p className="card-text">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;