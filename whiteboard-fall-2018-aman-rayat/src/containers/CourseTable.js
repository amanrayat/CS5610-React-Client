import React from 'react';
import CourseRow from '../components/CourseRow'
export default class CourseTable extends React.Component{
    constructor(){
        super();
    }

    renderCourses = ()=>{
        return(
        this.props.courses.map((course)=>{
            return(
                <div >
                    <CourseRow
                        delete={this.props.delete}
                        key={course.id}
                        course={course}/>
                </div>

            )
        }))
};
    render(){
        return(
            <div>
                {this.renderCourses()}
            </div>
        )
    }
}