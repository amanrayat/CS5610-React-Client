import React from 'react';
import {FormControl} from "react-bootstrap";

export default class TopicPillItem extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            editing : false
        }
    }
    updateTopic=()=>{
        this.setState({editing:true})
    }
    saveTopic =()=>{
        this.props.updateTopic(this.props.topic.id , this.input.value);
        this.setState({editing:false})
    }
    deleteTopic = ()=>{
      this.props.deleteTopic(this.props.topic.id)
    };
    selectTopic =()=>{
        this.props.selectTopic(this.props.topic.id)
    }
    isEditing =()=>{
        if(this.state.editing ===false){
            return(
                <li className=" nav-item m-5" key={this.props.topic.id}>
                    <div className='row'>
                        <div>
                            <button onClick={this.selectTopic} className={this.props.classname}><h5>{this.props.topic.title}</h5></button>
                        </div>
                        <div className={'mx-1'}>
                            <button onClick={this.deleteTopic}
                                    type="button"
                                    className="btn btn-sm btn-outline-danger btn-inline">
                                Delete
                            </button>
                        </div>
                        <div className={'mx-1'}>
                            <button onClick={this.updateTopic}
                                    type="button"
                                    className="btn btn-sm btn-outline-success btn-inline">
                                Update
                            </button>
                        </div>
                    </div>
                </li>
            )
        }
        else{
            return(
                <li className=" nav-item m-5" key={this.props.topic.id}>
                    <div className='row'>
                        <span className='custom-control-inline'>
                            <FormControl
                                defaultValue={this.props.topic.title}
                                className={'black-background'}
                                componentClass="input"
                                type="text"
                                inputRef={(ref) => {this.input = ref}}/>
                            <div className={'mx-1'}>
                                <button onClick={this.deleteTopic}
                                        type="button"
                                        className="btn btn-sm btn-outline-danger btn-inline">
                                    Delete
                                </button>
                            </div>
                            <div className={'mx-1'}>
                                <button onClick={this.saveTopic}
                                        type="button"
                                        className="btn btn-sm btn-outline-primary btn-inline">
                                    Save
                                </button>
                            </div>
                        </span>

                    </div>
                </li>
            )
        }
    };
        render(){
            return(
                <div>
                    {this.isEditing()}
                </div>
            )
        }

}
