import React, { Component } from 'react';
import COURSES from './data/courses';

class Course extends Component {
    render() {
        console.log("this.props", this.props);
        const { title, date, school, contents } = this.props.course;
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h3>{title}</h3>
                <p>{school} - {date}</p>
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

        )
    }
}


class Courses extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
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