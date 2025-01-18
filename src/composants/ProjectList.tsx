import React from 'react';
import projects from '../data/projects';

const ProjectList: React.FC = () => {
    return (
        <section style={{ overflowX: 'hidden' }}>
            <h2 className="text-center m-0 mb-6 border-y-2" style={{ fontSize: '6vw' }}>Mes Projets</h2>
            <div className="grid">
                {projects.map((project) => (
                    <div
                        className="col-12 md:col-6 lg:col-4 mb-4"
                        key={project.id}
                        style={{ padding: '0 0.5rem' }}
                    >
                        <div className="card flex flex-column align-items-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full border-round mb-3"
                                style={{
                                    objectFit: 'cover',
                                    maxHeight: '200px',
                                    width: '100%',
                                }}
                            />
                            <h3 className="text-center">{project.title}</h3>
                            <p className="m-0 text-center">{project.description}</p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block text-primary"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    );
};

export default ProjectList;
