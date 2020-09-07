import React, { Component } from 'react';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import SocialProfiles from './SocialProfiles';
// import profile from './assets/profileImage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
    state = {
        displayAbout: false,
        displayEducation: false,
        displayExperiences: false,
        displayProjects: false,
    };


    toggleAbout = () => {
        this.setState({ displayAbout: !this.state.displayAbout });
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
                {/* <img src={profile} alt='profile-picture' className='profile' /> */}
                <h1>Hey, I'm Mathieu</h1>
                {/* {
                    this.state.displayBio ? (
                        <div>
                            <p>Originally from a small French island close to the east coast of Canada,
                            I studied in the sout-west of France and the UK before working for about a year in Berlin.</p>
                            <p>From Web Development to Robotics, Video Game or Virtual Environments, I have always been interested in programming and its various applications</p>
                            <p>If I'm not coding, you can find me either on a slackline, reading a book, playing guitar, relaxing a hammock or playing video games.</p>
                            <Button className="BioButton" variant="outline-info" onClick={this.toggleBio} block>Show less</Button>
                        </div>
                    ) : (
                            <Button className="BioButton" variant="outline-info" onClick={this.toggleBio} block>Read more</Button>
                        )
                }                */}
                <hr  style={{ marginTop: 20 }}/> 
                <div>
                    <h2 className="sectionTitle" onClick={this.toggleAbout}> About</h2>
                    {
                        this.state.displayAbout ? (
                            <div>
                                <p>Originally from a small French island on the east coast of Canada,
                                    I studied in the sout-west of France and the UK before working for about a year in Berlin.</p>
                                <p>From Web Development to Robotics, Video Game or Virtual Environments, I have always been interested in programming and its various applications</p>
                                <p>If I'm not coding, you can find me either on a slackline, reading a book, playing guitar, relaxing a hammock or playing video games.</p>
                            </div>
                        ) : (null)
                    }
                </div>
                <hr />
                <div>
                    <h2 className="sectionTitle" onClick={this.toggleEducation}> Education</h2>
                    {
                        this.state.displayEducation ? (
                            <div>
                                <hr />
                                <Courses />
                            </div>
                        ) : (null)
                    }
                </div>
                <hr />
                <div>
                    <h2 className="sectionTitle" onClick={this.toggleExperiences}> Experiences</h2>
                    {
                        this.state.displayExperiences ? (
                            <div>
                                <hr />
                                <Experiences />
                            </div>
                        ) : (null)
                    }
                </div>
                <hr />
                <div>
                    <h2 className="sectionTitle" onClick={this.toggleProjects}> Projects</h2>
                    {
                        this.state.displayProjects ? (
                            <div>
                                <hr />
                                <Projects />
                            </div>
                        ) : (null)
                    }
                </div>
                <hr />
                <div style={{ bottom: 0 }} >
                    <h2 className="sectionTitle">Contact</h2>
                    {
                        <SocialProfiles />
                    }
                </div>
            </div>
        )
    }
}
export default App;

