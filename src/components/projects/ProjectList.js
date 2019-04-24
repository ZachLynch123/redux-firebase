import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = props => { 
    const { projects } = props;
    return (
        <div className="project-list section">
            {
                projects && projects.map((project=> <ProjectSummary project={project} key={project.id} />))
            }
            {/* <ProjectSummary />
            <ProjectSummary /> 
            <ProjectSummary /> */}
        </div>
    )
}


export default ProjectList;