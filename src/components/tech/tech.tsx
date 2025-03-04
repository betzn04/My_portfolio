import React from 'react';
import './tech.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiGnubash, SiMysql, SiMongodb, SiExpress, SiTailwindcss, SiGit, SiGithubactions, SiVercel, SiLinux } from 'react-icons/si';
import ScrollAnimation from '../../common/ScrollAnimation';

const Projects: React.FC = () => {
    return (
        <div className="techs px-4">
            <ScrollAnimation>
                <h2 className="project-title">Technology</h2>
                <h6>Here's what I typically work with.</h6>
                <br />
                <div className="row px-4" style={{ margin: '15px 5px 0px 5px' }}>
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
            </ScrollAnimation>
        </div>
    );
};

export default Projects;