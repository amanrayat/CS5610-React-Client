import React from 'react';
import {FormControl} from "react-bootstrap";
import {Link} from 'react-router-dom'
import LessonTabItem from '../components/LessonTabItem'
import CourseService from "../service/CourseService";

export default class LessonTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lessons : [],
        };
        this.courseService = new CourseService();

    }

    componentDidMount(){
        console.log("componentDidMount")
        this.reRender();
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps")
        this.setState({
            lessons : this.courseService.findAllLessonsForModule(newProps.courseId , newProps.moduleId)
        })
    }

    reRender = ()=>{
        console.log("i am from rerender and the module id is " , this.props.moduleId)
        this.setState({
            lessons : this.courseService.findAllLessonsForModule(this.props.courseId , this.props.moduleId)
        })
    };
    addLesson = ()=>{
        this.courseService.createLessonForModuleId(this.props.courseId , this.props.moduleId , this.input.value);
        this.reRender();
    };

    deleteLesson = (lessonId)=>{
        this.courseService.deleteLessonForModuleId(this.props.courseId , this.props.moduleId , lessonId)
        this.reRender();
    };
    renderLessonItem = ()=> {
        if(this.state.lessons){
            return(
                this.state.lessons.map((lesson)=>{
                    return(
                        <LessonTabItem key={ lesson.id } lesson={lesson} lessonClick={this.lessonClick}
                                       deleteLesson = { this.deleteLesson }
                                       classname={ this.state.lessonId ===lesson.id? 'nav-link selected' : 'nav-link' }/>)
                })
            )
        }

    };
    render(){
        console.log("the lesson state is " , this.state)
        return(
            <ul className="nav nav-tabs background_black">
                <li className="nav-item">
                    <span className='custom-control-inline'>
                        <Link to={'/courses'}>
                            <button className={'btn btn-outline-danger '}>
                                <i className="fa fa-arrow-left"/>
                            </button>
                        </Link>
                        <a className='nav-link'>{this.props.title}</a>
                    </span>
                </li>
                {this.renderLessonItem()}
                <form className="form-inline my-2 my-lg-0" style={{marginLeft: '40px'}}>
                    <FormControl
                        componentClass="input"
                        type="text"
                        inputRef={(ref) => {this.input = ref}}
                        placeholder="New Lesson title" />
                    <button
                        className="btn btn-outline-primary my-2 my-sm-0"
                        type="button"
                        onClick={this.addLesson}>
                        Add Lesson
                    </button>
                </form>
            </ul>
        )
    }
}