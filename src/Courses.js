import React, { Component } from 'react';
import COURSES from './data/courses';

class Course extends Component {
    render() {
        console.log("this.props", this.props);
        const { title, date, school, contents } = this.props.course;
        return (
            <div style={{ display: 'inline-block', width: 800, margin: 40, verticalAlign: 'top' }}>
                <div>
                    <h3 className="elementTitle">{title}</h3>
                    <p>{school} - {date}</p>
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
                </div>
            </div>
        )
    }
}


class Courses extends Component {
    render() {
        return (
            <div>
                <div>
                    {
                        COURSES.map(COURSE => {
                            return (
                                <Course key={COURSE.id} course={COURSE} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Courses;