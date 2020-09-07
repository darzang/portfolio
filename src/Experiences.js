import React, { Component } from 'react';
import EXPERIENCES from './data/experiences';

class Experience extends Component {
    render() {
        const { title, company, companyIntro, date, contents, stack } = this.props.experience;
        return (
            <div style={{ display: 'inline-block', width: 400, margin: 40, verticalAlign: 'top' }}>
                <div>
                    <h3 className="elementTitle">{title}</h3>
                    <p>{company} - {date}</p>
                    <i style= {{ fontSize: "15px"}}>{companyIntro}</i>
                </div>
                <div >
                    <div>
                        {
                            contents.map(content => {
                                return (
                                    <p>{content}</p>
                                )
                            })
                        }
                    </div>
                    <span>
                        {
                            ((
                                stack.reduce((acc, curr, index) => {
                                if (index === stack.length - 1) {
                                    return acc + curr + ".";
                                } else {
                                    return acc + curr + ", ";
                                }
                            }, "")))
                        }
                    </span>
                </div>
            </div>)
    }
}

class Experiences extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        EXPERIENCES.map(EXPERIENCE => {
                            return (
                                <Experience key={EXPERIENCE.id} experience={EXPERIENCE} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Experiences;