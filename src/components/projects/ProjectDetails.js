import React from 'react'

const ProjectDetails =(props)=> {
    const id = props.match.params.id;

    return (
        <div className="contaier section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Project Title {id}</span>
                    <p>bueno wuneo pero no tan bueno hahah no me agarro la vaina del lorem</p>
                </div>

                <div className="card-action gre lighte-4 grey-text">
                    <div>Posted by Te et ninja</div>
                    <div>2nd september, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;