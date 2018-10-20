import React from 'react';
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";
import ModuleListItem from '../components/ModuleListItem'
import LessonTab from "./LessonTab";

export default class ModuleList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            moduleId:'',
            lessonId:'',
            topicId:'',
            modules: [],
            courseName:''
        };

        this.courseService = new CourseService();
    }
    componentDidMount(){
        this.reRender();
    }
    componentWillReceiveProps(newProps){

        this.courseService.findAllModulesForCourseId(newProps.courseId).then((res)=>{
            this.setState({modules:res.data,
                moduleId:res.data[0]?res.data[0].id:this.state.moduleId,
                courseName : this.courseService.findCourseNameByCourseId(this.state.courseId),
                courseId : newProps.courseId
            })
        })

    }
    reRender = () =>{
        console.log("in re render")
        if(this.props.courseId){
            this.courseService.findAllModulesForCourseId(this.state.courseId).then((res)=>{
                this.setState({modules:res.data,
                    moduleId:res.data?res.data[0].id:null,
                    courseName : this.courseService.findCourseNameByCourseId(this.state.courseId)
                })
            })
        }


    };
    deleteModule = (moduleId)=>{
        this.courseService.deleteModuleForCourseId(moduleId).then(()=>{
            this.reRender();
        });

    };
    onloadLesson = (newmoduleId)=>{
        this.setState({
            moduleId: newmoduleId
        })
    };
    onUpdateModule=(id , value)=>{
        this.courseService.updateModuleListItem( id,value).then(()=>{
            this.reRender();
        })
}
    renderModuleListItem = ()=>{
        return(
            this.state.modules.map((moduleItem)=>{
                return (
                    <ModuleListItem
                        onUpdateModule={this.onUpdateModule}
                        selected={this.state.moduleId}
                        onloadLesson={this.onloadLesson}
                        deleteModule={this.deleteModule}
                        key={moduleItem.id}
                        moduleItem={moduleItem}/>
                )
            })
        )
    };
    createModule = ()=>{
        this.courseService.createModuleForCourseId(this.input.value , this.state.courseId).then(()=>{
            this.reRender();
            this.input.value="";

        })

    };
    render(){
        if(this.state.courseId){
            return(
                <div className={'height_full'}>
                    <LessonTab reRender={this.reRender} title={this.state.courseName} moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                    <div className={'black-background row height_full'}>
                        <div className={'col-12'}>
                            <ul className="list-group background_black height_full">
                                {this.renderModuleListItem()}
                                <span className={'black-background'}>
                                   <FormControl
                                       className={'black-background'}
                                       componentClass="input"
                                       type="text"
                                       inputRef={(ref) => {this.input = ref}}
                                       placeholder="New Module title" />
                                    <button
                                        onClick={this.createModule}
                                        type='button'
                                        className=' btn-block btn  btn-outline-success text-center'>
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