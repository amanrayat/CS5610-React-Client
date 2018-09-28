import React from 'react';
import {FormControl} from "react-bootstrap";
import {Link} from 'react-router-dom'
import LessonTabItem from '../components/LessonTabItem'
import CourseService from "../service/CourseService";
import TopicPill from './TopicPill'

export default class LessonTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lessons : [],
        };
        this.courseService = new CourseService();

    }

    componentDidMount(){
        this.reRender();
    }
    componentWillReceiveProps(newProps){
        console.log("the new Props in lesson tab are " , newProps)
        this.setState({
            lessons : this.courseService.findAllLessonsForModule(newProps.courseId , newProps.moduleId),
            lessonId:
                this.courseService.findAllLessonsForModule(newProps.courseId , newProps.moduleId).length>0?
                    this.courseService.findAllLessonsForModule(newProps.courseId , newProps.moduleId)[0].id:null
        })
    }

    reRender = ()=>{
        this.setState({
            lessons : this.courseService.findAllLessonsForModule(this.props.courseId , this.props.moduleId),
            lessonId:
                this.courseService.findAllLessonsForModule(this.props.courseId , this.props.moduleId).length>0?
                    this.courseService.findAllLessonsForModule(this.props.courseId , this.props.moduleId)[0].id:null
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
    loadTopic = (lessonId)=>{
        this.setState({
            lessonId:lessonId
        })
    }
    renderLessonItem = ()=> {
        if(this.state.lessons){
            return(
                this.state.lessons.map((lesson)=>{
                    return(
                        <LessonTabItem key={ lesson.id } lesson={lesson} loadTopic={this.loadTopic}
                                       deleteLesson = { this.deleteLesson }
                                       classname={ this.state.lessonId ===lesson.id? 'nav-link selected' : 'nav-link' }/>)
                })
            )
        }

    };
    handleEmptyTopic =()=>{
        if(this.state.lessonId){
            return (
                <div className='col-8 float-right'>
                    <TopicPill courseId={this.props.courseId} moduleId={this.props.moduleId} lessonId={this.state.lessonId}/>
                </div>
            )
        }else{
            return(
                <div className='col-8 float-right'>
                    <h1>Hey Please add some lessons first</h1>
                </div>)
        }
    }
    render(){
        return(
            <div>
                <div>
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
                </div>
                {this.handleEmptyTopic()}

            </div>
        )

    }
}