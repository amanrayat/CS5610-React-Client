import React from 'react';
import {FormControl} from "react-bootstrap";
import LessonTabItem from '../components/LessonTabItem'
import CourseService from "../service/CourseService";
import TopicPill from './TopicPill'
import CourseName from './CourseName'

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [],
        };
        this.courseService = new CourseService();

    }

    componentDidMount() {
        this.reRender();
    }

    componentWillReceiveProps(newProps) {
        if(this.props.moduleId){
            this.courseService.findAllLessonsForModule( newProps.moduleId).then((res)=>{
                this.setState({
                    lessons: res.data,
                    lessonId: res.data[0] ? res.data[0].id : null
                })
            })
        }

    }

    reRender = () => {
        if(this.props.moduleId){
            this.courseService.findAllLessonsForModule( this.props.moduleId).then((res)=>{
                this.setState({
                    lessons: res.data,
                    lessonId: res.data[0] ? res.data[0].id : null
                })
            })
        }


    };
    addLesson = () => {
        this.courseService.createLessonForModuleId( this.props.moduleId, this.input.value).then(()=>{
            this.reRender();
            this.input.value="";
        });

    };

    deleteLesson = (lessonId) => {
        this.courseService.deleteLessonForModuleId(lessonId).then(()=>{
            this.reRender();
        })
    };
    loadTopic = (lessonId) => {
        this.setState({
            lessonId: lessonId
        })
    };
    onSave = (id , value)=>{
        this.courseService.updateLesson(id ,value).then(()=>{
            this.reRender();
            this.input.value="";
        });
    };
    renderLessonItem = () => {
        if (this.state.lessons) {
            return (
                this.state.lessons.map((lesson) => {
                    return (
                        <LessonTabItem key={lesson.id} lesson={lesson} loadTopic={this.loadTopic}
                                       deleteLesson={this.deleteLesson} onSave ={this.onSave}
                                       classname={this.state.lessonId === lesson.id ? 'nav-link selected' : 'nav-link'}/>)
                })
            )
        }

    };
    handleEmptyTopic = () => {
        if (this.state.lessonId) {
            return (
                <div className='col-8 float-right'>
                    <TopicPill courseId={this.props.courseId} moduleId={this.props.moduleId}
                               lessonId={this.state.lessonId}/>
                </div>
            )
        } else {
            return (
                <div className='col-8 float-right'>
                    <h1>Hey Please add some lessons first</h1>
                </div>)
        }
    };

    render() {
        return (
            <div>
                <div className={'black-background'}>
                    <ul className="nav nav-tabs background_black">
                        <li className="nav-item">
                            <CourseName reRender={this.props.reRender} id={this.props.courseId} title={this.props.title}/>
                        </li>
                        {this.renderLessonItem()}
                        <form className="form-inline my-2 my-lg-0" style={{marginLeft: '40px'}}>
                            <FormControl
                                className={'black-background'}
                                componentClass="input"
                                type="text"
                                inputRef={(ref) => {
                                    this.input = ref
                                }}
                                placeholder="New Lesson title"/>
                            <button
                                className="btn btn-outline-primary mx-3 my-2 my-sm-0"
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