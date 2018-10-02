import React from 'react'
import {FormControl , ListGroupItem , ListGroup ,Col, Grid, Row} from "react-bootstrap";


export default class CourseTableHeading extends React.Component{
    constructor(props){
        super();

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
                            <Col sm={7} lg={7} md={7}>
                                <FormControl
                                    componentClass="input"
                                    type="text"
                                    inputRef={(ref) => {this.input = ref}}
                                    placeholder="New Course Title" />
                            </Col>
                            <Col sm={2} lg={2} md={2}>
                                <button onClick={this.addCourse} className={'btn'} id={'plus_button'}><i className="fa fa-plus-circle"/></button>
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