import React from 'react';

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    render() {
        return (
            <div>
                {this.props.projects.map(project => (
                    <ProjectDetails key={project.id} />
                ))}
            </div>
        )
    }
    
}

function ProjectDetails(props) {
    const { name, description } = props.project;
    return (
        <div>
            Name: {name}
            Description: {description}
        </div>
    )
}

export default ProjectsList;