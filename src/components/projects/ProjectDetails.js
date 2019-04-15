import React from 'react';

const ProjectDetails = props => {
    console.log(props);
    
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">ProjectTitles - {id}</span>
                    <p>lasdfhkjahsdfiuhaiufdha sdfiuahsdiuf auisf uias hfuiha suifh aiudh fiah iofh ahf iaushd fioa hidf ahi</p>
                </div>
                <div className="card-action grey.lighten-4 grey-text">
                    <div>Posted by Me</div>
                    <div>12 12 90</div>
                </div>
            </div>
        </div>
    )
}




export default ProjectDetails;