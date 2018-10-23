import React from 'react'
import {FormControl , ListGroupItem , ListGroup ,Col, Grid, Row} from "react-bootstrap";
import {Link} from 'react-router-dom'
import UserService from '../service/UserService'


export default class CourseTableHeading extends React.Component{
    constructor(props){
        super();
        this.UserService = new UserService();
    }
    changeView = ()=>{
        this.props.changeView();
    };
    addCourse = ()=>{
        this.props.addCourse(this.input.value);
        this.input.value ="";
    };


    render(){
        return(
            <ListGroup>
                <ListGroupItem  id={'background_blue'}>
                    <Grid>
                        <Row>
                            <Col sm={3} lg={3} md={3} id={'logo'}>
                                <i className="fa fa-bars"/> Course Manager
                            </Col>
                            <Col sm={6} lg={6} md={6}>
                                <FormControl
                                    componentClass="input"
                                    type="text"
                                    inputRef={(ref) => {this.input = ref}}
                                    placeholder="New Course Title" />
                            </Col>
                            <Col sm={1} lg={1} md={1}>
                                <button onClick={this.addCourse} className={'btn'} id={'plus_button'}><i className="fa fa-plus-circle"/></button>
                            </Col>
                            <Col sm={2} lg={2} md={2}>
                                <Link to={'/profile'}>
                                    <button  className={'btn btn-success'} >Profile</button>
                                </Link>
                            </Col>

                        </Row>
                    </Grid>
                </ListGroupItem>
                <ListGroupItem>
                    <Grid>
                        <Row>
                            <Col  sm={3} lg={3} md={3}>
                                Title
                            </Col>
                            <Col  sm={3} lg={3} md={3}>
                                Owned By
                            </Col>
                            <Col  sm={3} lg={3} md={3}>
                                Last Modified
                            </Col>
                            <Col  sm={3} lg={3} md={3}>
                                <button onClick={this.changeView} className={'btn'}><i className="fa fa-th"/></button>
                            </Col>
                        </Row>
                    </Grid>
                </ListGroupItem>
            </ListGroup>
        )
    }
}