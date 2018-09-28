import React from 'react';
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";
import ModuleListItem from '../components/ModuleListItem'
import LessonTab from "./LessonTab";

export default class ModuleList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseId:123,
            moduleId:'',
            lessonId:'',
            topicId:'',
            modules: []
        };

        this.courseService = new CourseService();

    }
    componentDidMount(){
        this.rerender();
    }
    rerender = () =>{
        this.setState({modules:this.courseService.findAllModulesForCourseId(this.state.courseId),
            moduleId:this.courseService.findAllModulesForCourseId(this.state.courseId)[0].id})
    };
    deleteModule = (moduleId)=>{
        this.courseService.deleteModuleForCourseId(moduleId , this.state.courseId);
        this.rerender();

    };
    onloadLesson = (newmoduleId)=>{
        console.log("the module is " , newmoduleId)
        this.setState({
            moduleId: newmoduleId
        })
    }
    renderModuleListItem = ()=>{
        console.log("i am in rendermodule list item ")
        return(
            this.state.modules.map((moduleItem)=>{
                return (
                    <ModuleListItem
                        onloadLesson={this.onloadLesson}
                        deleteModule={this.deleteModule}
                        key={moduleItem.id}
                        moduleItem={moduleItem}/>
                )
            })
        )
    };
    createModule = ()=>{
        this.courseService.createModuleForCourseId(this.input.value , this.state.courseId);
        this.rerender();

    };
    render(){
        console.log("the module state is" , this.state)
        if(this.state.moduleId){
            return(
                <div>
                    <LessonTab moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                    <div className={'row'}>
                        <div className={'col-2 mx-5'}>
                            <ul className="list-group background_black height_full">
                                {this.renderModuleListItem()}
                                <span>
                       <FormControl
                           componentClass="input"
                           type="text"
                           inputRef={(ref) => {this.input = ref}}
                           placeholder="New Module title" />
                        <button
                            onClick={this.createModule}
                            type='button'
                            className='text-center input-group btn  btn-outline-success'>
                            <i className="fa fa-plus align-center center_it"/>
                        </button>
                    </span>
                            </ul>
                        </div>
                    </div>
                </div>

            )
        }
        else{
            return (<div>Hello</div>)
        }
    }
}