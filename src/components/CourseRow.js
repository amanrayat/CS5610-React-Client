import React from 'react'
import Moment from 'react-moment';
import { ListGroup ,Grid ,Row , Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const CourseRow =  (props)=> {

    this.deleteCourse =  ()=> {
        props.delete(props.course.id);
    };

    let date = new Date();
  return(
      <ListGroup className={'m-5'}>
          <Grid>
              <Row>
                  <Col xs={3} sm={3} lg={3} md={3}>
                      <Link to={`/course/${props.course.id}`}>{props.course.title}</Link>
                  </Col>
                  <Col xs={3} sm={3} lg={3} md={3}>
                      {props.course.owner}
                  </Col>
                  <Col xs={3} sm={3} lg={3} md={3}>
                      <Moment format={"MM/DD/YYYY"}>{date}</Moment>
                  </Col>
                  <Col xs={3} sm={3} lg={3} md={3}>
                      <button onClick={this.deleteCourse} className={'btn btn-danger'}><i className="fa fa-times"/></button>
                  </Col>
              </Row>
          </Grid>
      </ListGroup>
  )
};
export default CourseRow;