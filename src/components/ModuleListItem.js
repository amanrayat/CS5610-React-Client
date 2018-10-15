import React from 'react'
import {FormControl} from "react-bootstrap";

export default class ModuleListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editing : false
        }
    }


    onDelete = ()=>{
        this.props.deleteModule(this.props.moduleItem.id);
    };

    onloadLesson = ()=>{
        this.props.onloadLesson(this.props.moduleItem.id);
    };
    onUpdate =()=>{
        this.setState({
            editing : true
        })
    };

    onSaveUpdate = ()=>{
        this.props.onUpdateModule(this.props.moduleItem.id , this.input.value);
        this.setState({
            editing:false
        })
    };

    renderModuleList = ()=>{

        if(this.state.editing===false){
            return (
                <li  className={this.props.moduleItem.id === this.props.selected ? '  list-group-item selected ':'list-group-item black-background '}>
                    <button  onClick={this.onloadLesson}
                             className={this.props.moduleItem.id === this.props.selected ?'btn btn_selected':'btn btn_selected'}>
                        {this.props.moduleItem.title}
                    </button>
                    <button onClick={this.onDelete}
                            className='btn float-right btn-outline-danger'>
                        <i className="fa fa-times "/>
                    </button>
                    <button onClick={this.onUpdate}
                            className='mx-3 btn float-right btn-outline-success'>
                        <i className="fa fa-pencil "/>
                    </button>
                </li>
            )
        }
        else{
            return(
                <li  className={this.props.moduleItem.id === this.props.selected ? 'list-group-item selected ':'list-group-item black-background '}>
                    <div className={'row'}>
                        <div className={'col-7'}>
                            <FormControl
                                defaultValue={this.props.moduleItem.title}
                                className={'black-background'}
                                componentClass="input"
                                type="text"
                                inputRef={(ref) => {this.input = ref}}
                                placeholder={this.props.moduleItem.title} />
                        </div>
                        <div className={'col-2 float-left'}>
                            <button onClick={this.onDelete}
                                    className='btn btn-inline float-right btn-outline-danger'>
                                <i className="fa fa-times "/>
                            </button>
                        </div>
                        <div className={'col-2'}>
                            <button onClick={this.onSaveUpdate}
                                    className='mx-3 btn float-right btn-outline-primary'>
                                <i className="fa fa-check "/>
                            </button>
                        </div>
                    </div>
                </li>
            )

        }
    }
    render(){
        return (
            <div>
                {this.renderModuleList()}
            </div>
        )
    }

};
