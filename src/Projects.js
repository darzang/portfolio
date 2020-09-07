import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        console.log("this.props", this.props);
        const { title, image, description, link } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 400, height: 300, margin: 10, verticalAlign: 'top'}}>
                <h3 className="elementTitle">{title}</h3>
                <img src={image} alt='project' style={{width: 200, height: 120}} />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>

        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        PROJECTS.map(project => {
                            return (
                                <Project key={project.id} project={project} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;