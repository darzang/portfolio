import React, { Component } from 'react';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import './index.css';

class App extends Component {
    state = {
        displayBio: false,
        displayEducation: false,
        displayExperiences: false,
        displayProjects: false,
    };

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    toggleEducation = () => {
        console.log("Toggle Education");
        this.setState({ displayEducation: !this.state.displayEducation });
    }
    toggleExperiences = () => {
        this.setState({ displayExperiences: !this.state.displayExperiences });
    }
    toggleProjects = () => {
        this.setState({ displayProjects: !this.state.displayProjects });
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile-picture' className='profile' />
                <h1>Hey</h1>
                <p>I'm Mathieu</p>
                <p></p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Bio will come here at some point</p>
                            <div><button onClick={this.toggleBio}>Show less</button></div>
                        </div>
                    ) : (
                            <div><button onClick={this.toggleBio}>Read more</button></div>
                        )
                }
                <hr />
                <div>
                    <h2 onClick={this.toggleEducation}> Education</h2>
                    {
                        this.state.displayEducation ? (
                            <Courses />
                        ) : (null)
                    }
                </div>
                <hr />
                <div>
                    <h2 onClick={this.toggleExperiences}> Experiences</h2>
                    {
                        this.state.displayExperiences ? (
                            <Experiences />
                        ) : (null)
                    }
                </div>
                <hr />
                <div>
                    <h2 onClick={this.toggleProjects}> Projects</h2>
                    {
                        this.state.displayProjects ? (
                            <Projects />
                        ) : (null)
                    }
                </div>
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}
// <hr /> horizontal line
export default App;