import React from 'react';
import TopicPillItem from './TopicPillItem'
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";

export default class TopicPill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics :[]
        }
        this.courseService = new CourseService();

    }
    componentDidMount(){
        this.setState({
            topics : this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics,
            // topicId :
            // this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId)?[0].id,
        })
    }
    componentWillReceiveProps(newProps){
        this.setState({
            topics : this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId , newProps.lessonId).topics,
            // topicId:this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId , newProps.lessonId)[0].id
        })
    }

    reRender= ()=>{
        this.setState({
            topics : this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics,
            // topicId :
            // this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId)?[0].id,
        })
    };
    fallback = ()=>{
        return(
            <div>
                <h1>Nothing to display</h1>
                <h4>Either select a lesson or add new topics</h4>
            </div>
        )
    };
    deleteTopic = (id)=>{
        this.courseService.deleteTopicForLessonId(this.props.courseId , this.props.moduleId , this.props.lessonId , id)
        this.reRender();
    };

    addTopic=()=>{
        this.courseService.addNewTopicforLesson(this.props.courseId ,this.props.moduleId , this.props.lessonId , this.input.value)
        this.reRender();
    }

    renderTopics = ()=>{
        if(this.state.topics){
            return (
                this.state.topics.map((topic) => {
                    return(
                        <TopicPillItem key={topic.id}
                                       topic={topic}
                                       deleteTopic={this.deleteTopic}/>
                    )
                })
            )
        }
        else{
            return(
                <div>
                    {this.fallback}
                </div>
            )
        }
    };

    render(){
        return(
            <ul className={'nav'}>
                {this.renderTopics()}
                <FormControl
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {this.input = ref}}
                    placeholder="New Lesson title" />
                <button style={{marginTop : '40px'}} onClick={this.addTopic} className={'btn btn-primary'}>Add New Topic</button>
            </ul>
        )
    }
};