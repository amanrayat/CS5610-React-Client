import React from 'react';
import CourseCard from "../components/CourseCard";
import {CardDeck} from 'reactstrap'

export default class CourseGrid extends React.Component{
    constructor(){
        super();
    }

    renderCourses = ()=>{
        return(
            this.props.courses.map((course)=>{
                return(
                        <CourseCard key={course.id}
                                   course={course}/>
                )
            }))
    };
    render(){
        return(
            <CardDeck>
                {this.renderCourses()}
            </CardDeck>

        )
    }
}