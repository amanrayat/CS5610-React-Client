import React from 'react';
import CourseCard from "../components/CourseCard";
import {CardDeck , CardColumns} from 'reactstrap'

const CourseGrid = (props)=>{

    this.renderCourses = ()=>{
        return(
            props.courses.map((course)=>{
                return(
                    <CourseCard key={course.id}
                                course={course}
                                delete={props.delete}/>
                )
            }))
    };

        return(
            <div className={'container'}>
                <CardDeck>
                    <CardColumns>
                        {this.renderCourses()}
                    </CardColumns>
                </CardDeck>
            </div>
        )
};

export default CourseGrid;