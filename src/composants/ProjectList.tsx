import React from 'react';
import { projects } from '../data/projects';

const ProjectList: React.FC = () => {
    return (
        <section>
            <h2>Mes Projets</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectList;
