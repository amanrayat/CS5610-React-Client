import React from 'react';
import CourseCard from "../components/CourseCard";
import {CardDeck , CardColumns} from 'reactstrap'

export default class CourseGrid extends React.Component{
    constructor(){
        super();
    }

    delete = (event)=>{
       this.props.delete(event)
    };

    renderCourses = ()=>{
        return(
            this.props.courses.map((course)=>{
                return(
                        <CourseCard key={course.id}
                                   course={course}
                                    delete={this.delete}/>
                )
            }))
    };
    render(){
        return(
            <div className={'container'}>
                <CardDeck>
                    <CardColumns>
                    {this.renderCourses()}
                    </CardColumns>
                </CardDeck>
            </div>


        )
    }
}