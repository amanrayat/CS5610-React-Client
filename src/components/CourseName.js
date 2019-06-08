import React from 'react'
import {Link} from "react-router-dom";
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";

export default class CourseName extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            editing : false
        }
        this.courseService = new CourseService();
    }

    update=()=>{
        this.setState({editing:true})
    };

    save =()=>{
        this.courseService.editCourse(this.props.id , this.input.value).then(()=>{
            this.setState({editing:false});
            this.props.reRender();
        });
        this.input.value="";
    };

    renderCourseName=()=>{
        if(this.state.editing ===false){
            return (
                <span className='custom-control-inline'>
                <Link to={'/courses'}>
                    <button className={'btn btn-outline-danger '}>
                        <i className="fa fa-arrow-left"/>
                    </button>
                </Link>
                <p className='nav-link'>{this.props.title}</p>
                <div>
                    <button onClick={this.update} className={'btn btn-outline-success '}>
                        <i className="fa fa-pencil"/>
                    </button>
                </div>
            </span>
            )
        }
        else{
            return(
                <span className='custom-control-inline'>
                <Link to={'/courses'}>
                    <button className={'btn btn-outline-danger '}>
                        <i className="fa fa-arrow-left"/>
                    </button>
                </Link>
                <FormControl
                    defaultValue={this.props.title}
                    className={'black-background'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {this.input = ref}}/>
                <div>
                    <button onClick={this.save} className={'btn btn-outline-primary '}>
                        <i className="fa fa-check"/>
                    </button>
                </div>
            </span>
            )
        }

    }
    render(){
        return(<div>{ this.renderCourseName()}</div>)
    }

}
