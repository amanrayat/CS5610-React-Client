import React from 'react';
import Moment from 'react-moment'
import { Card, Button,CardHeader, CardFooter,CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import '../style.css'
import {Col} from "react-bootstrap";
export default class CourseCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let date = new Date();
        return(
            <Card className={'m-5'}>
                <CardHeader id={'background_blue'}>Course Info</CardHeader>
                <CardBody>
                    <CardTitle>{this.props.course.title}</CardTitle>
                    <CardSubtitle className={'my-4'}>Instructor:<em>{this.props.course.OwnedBy}</em></CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button className={'btn btn-danger'}>Delete</Button>
                </CardBody>
                <CardFooter id={'background_blue'}>Last modified:
                    <Moment format={"MM/DD/YYYY"}>{date}</Moment>
                </CardFooter>
            </Card>
        )
    }
}
