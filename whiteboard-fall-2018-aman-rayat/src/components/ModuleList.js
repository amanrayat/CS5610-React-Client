import React from 'react';
import {FormControl} from "react-bootstrap";
import ModuleService from "../service/ModuleService";
import ModuleListItem from '../components/ModuleListItem'

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

        this.moduleService = new ModuleService();

    }
    componentDidMount(){
        this.setState({
            modules :  this.moduleService.findAllModulesForCourseId(this.state.courseId)
        });
    }
    renderModuleListItem = ()=>{
        return(
            this.state.modules.map((moduleItem)=>{
                return (
                    <ModuleListItem
                        key={moduleItem.id}
                        title={moduleItem.title}/>
                )
            })
        )
    };
    createModule = ()=>{
        this.moduleService.createModuleForCourseId(this.input.value , this.state.courseId);
        this.setState({modules:this.moduleService.findAllModulesForCourseId(this.state.courseId)})
    };
    render(){
        return(
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
        )
    }
}