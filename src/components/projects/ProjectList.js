import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = props => {
    const { projects } = props;
    return (
        <div className="project-list section">
            {
                projects.map((project => <ProjectSummary project={project} />))
            }
            {/* <ProjectSummary />
            <ProjectSummary /> 
            <ProjectSummary /> */}
        </div>
    )
}


export default ProjectList;