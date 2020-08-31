import React, { Component } from 'react';
import Projects from './Projects';
import Courses from './Courses';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import './index.css';

class App extends Component {
    state = { displayBio: false };

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
            <img src={profile} alt='profile-picture' className='profile' />
                <h1>Hey</h1>
                <p>I'm Mathieu</p>
                <p>I'm just messing around</p>
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
                <Courses />
                <hr /> 
                <Projects />
                <hr /> 
                <SocialProfiles />
            </div>
        )
    }
}
// <hr /> horizontal line
export default App;