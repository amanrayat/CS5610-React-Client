import React from 'react';
import CourseRow from '../components/CourseRow'
const CourseTable = (props)=>{

    this.renderCourses = ()=>{
        return(
            props.courses.map((course)=>{
                return(
                    <CourseRow
                        key={course.id}
                        delete={props.delete}
                        course={course}/>
                )
            }))
    };
        return(
            <div>
                {this.renderCourses()}
            </div>
        )
    };

export default CourseTable;