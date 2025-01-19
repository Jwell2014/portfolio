import React from 'react';
import projects from '../data/projects';
import { Button } from 'primereact/button';

const ProjectList: React.FC = () => {
    return (
        <section style={{ overflowX: 'hidden' }}>
            <h2 className="text-center m-0 mb-6 border-y-2" style={{ fontSize: '6vw' }}>Mes Projets</h2>
            <div className="grid">
                {projects.map((project) => (
                    <div
                        className="col-12 md:col-6 lg:col-6 mb-4 border-bottom-1"
                        key={project.id}
                        style={{ padding: '0 0.5rem' }}
                    >
                        <div
                            className="card flex flex-column align-items-center justify-content-between p-4 shadow-2 surface-1"
                            style={{
                                height: '100%', // Assure que toutes les cards prennent toute la hauteur disponible
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full border-round mb-3"
                                style={{
                                    objectFit: 'cover',
                                    maxHeight: '350px',
                                    width: '100%',
                                }}
                            />
                            <h3 className="text-center">{project.title}</h3>
                            <h4 className="text-center">Desciption</h4>
                            <p className="m-0">{project.description}</p>
                            <h4 className="text-center">Caractéristiques</h4>
                            <ul className="text-left pl-5">
                                {project.features && project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <h4 className="text-center">Technologies</h4>
                            <ul className="text-left pl-5">
                                {project.technologies && project.technologies.map((technologie, index) => (
                                    <li key={index}>{technologie}</li>
                                ))}
                            </ul>
                            <h4 className="text-center">Objectif</h4>
                            <p className="m-0 text-center">{project.objective}</p>

                            <Button
                                className="mt-5"
                                label="Voir le projet"
                                raised
                                onClick={() => window.open(project.url)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
