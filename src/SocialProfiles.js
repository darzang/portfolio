import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        console.log("this.props", this.props);
        const { image, link } = this.props.profile;
        return (
            <div style={{ display: 'inline-block', width: 50, margin: 10}}>
                <a href={link}><img src={image} alt='profile' style={{width: 35, height: 35}} /></a>
            </div>

        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(profile => {
                            return (
                                <SocialProfile key={profile.id} profile={profile} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;