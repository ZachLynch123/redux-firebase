import React from 'react';

const ProjectSummary = (props) => {
    const { title, content } = props.project;
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                    <p>{content}</p>
                    <p>Posted by Zach</p>
                    <p className="grey-text">some date</p>
            </div>
        </div>

    );
}

export default ProjectSummary;