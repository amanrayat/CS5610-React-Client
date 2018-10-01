import React from 'react';
import {FormControl} from "react-bootstrap";

export default class LessonTabItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing : false
        }
    }

    deleteLesson = ()=>{
        this.props.deleteLesson(this.props.lesson.id)
    };
    loadTopic = ()=>{
        this.props.loadTopic(this.props.lesson.id)
    };
    onUpdate =()=>{
        this.setState({
            editing : true
        })
        // this.props.updateLesson(this.props.lesson.id);
    };
    onSave =()=>{
        this.props.onSave(this.props.lesson.id , this.input.value)
        this.setState({editing :false})
    }
    renderLessonItem = ()=>{
        if(this.state.editing === false){
            return(
                <ul className='nav nav-tabs '>
                    <li className={this.props.classname}>
                <span>
                    <button onClick={this.loadTopic}
                            className={this.props.classname =='nav-link selected'?'btn btn_selected':'btn btn_selected'}>{this.props.lesson.title}
                            </button>
                     <button onClick={this.onUpdate}
                             className='mx-3 btn float-right btn-outline-success'>
                                <i className="fa fa-pencil "/>
                     </button>
                    <button onClick={this.deleteLesson} className=' btn btn-outline-danger'>
                        <i className="fa fa-times "/>
                    </button>
                </span>
                    </li>
                </ul>
            )
        }
        else{
            return(
                <ul className='nav nav-tabs '>
                    <li className={this.props.classname}>
                <span>
                    <FormControl
                        defaultValue={this.props.lesson.title}
                        className={'black-background'}
                        componentClass="input"
                        type="text"
                        inputRef={(ref) => {this.input = ref}}/>

                     <button onClick={this.onSave}
                             className='mx-3 btn float-right btn-outline-primary'>
                                <i className="fa fa-check "/>
                     </button>
                    <button onClick={this.deleteLesson} className=' btn btn-outline-danger'>
                        <i className="fa fa-times "/>
                    </button>
                </span>
                    </li>
                </ul>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderLessonItem()}
            </div>
            )

    }

};

