import React from 'react';
import TopicPillItem from './TopicPillItem'
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import widgets from '../reducers/widgets'
import WidgetListContainer from '../containers/WidgetListContainer'
import WidgetListComponent from "./WidgetListComponent";


const store = createStore(widgets);

export default class TopicPill extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            topics :[]
        };
        this.courseService = new CourseService();

    }
    componentWillMount(){
        this.setState({
            topic:this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics.length>0?
                this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics[0]:null,
            topics : this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics,
            topicId :
            this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics.length>0?
                this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics[0].id:null
        })
    }
    componentWillReceiveProps(newProps){
        this.setState({
            topic :this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId ,newProps.lessonId).topics.length>0?
                this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId ,newProps.lessonId).topics[0]:null ,
            topics : this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId , newProps.lessonId).topics,
            topicId:this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId ,newProps.lessonId).topics.length>0?
                this.courseService.findAllTopicForModule(newProps.courseId , newProps.moduleId ,newProps.lessonId).topics[0].id:null
        })
    }

    reRender= ()=>{
        this.setState({
            topic :  this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics.length>0?
                this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics[0]:null,
            topics : this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics,
            topicId :
                this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics.length>0?
                    this.courseService.findAllTopicForModule(this.props.courseId , this.props.moduleId ,this.props.lessonId).topics[0].id:null
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
        this.input.value="";
    }
    updateTopic=(id ,value)=>{
        this.courseService.updateTopic(this.props.courseId , this.props.moduleId , this.props.lessonId ,id ,value)
    }
    selectTopic =(id)=>{
        this.setState({
            topicId:id,
            topic : this.courseService.findTopicById(id)
        })
    }

    renderTopics = ()=>{
        if(this.state.topics){
            return (
                this.state.topics.map((topic) => {
                    return(
                        <TopicPillItem key={topic.id}
                                       updateTopic={this.updateTopic}
                                       topic={topic}
                                       selectTopic={this.selectTopic}
                                       classname={this.state.topicId==topic.id?'selected btn':'btn'}
                                       deleteTopic={this.deleteTopic}/>
                    )
                })
            )
        }
        else{
            return(
                <div>
                    {this.fallback()}
                </div>
            )
        }
    };

    render(){
        return(
            <div>
                <h1 className={'text-center'}>Topics</h1>
                <ul className={'nav'}>
                    {this.renderTopics()}
                    <FormControl
                        componentClass="input"
                        type="text"
                        inputRef={(ref) => {this.input = ref}}
                        placeholder="New Topic title" />
                    <button style={{marginTop : '40px'}} onClick={this.addTopic} className={'btn btn-primary btn-block'}>Add New Topic</button>
                </ul>
                <Provider store={store}>
                    <WidgetListContainer topic={this.state.topic} widgetsInit={this.state.topic.widgets}/>
                </Provider>
                {/*<WidgetListComponent widgets={}/>*/}
            </div>

        )
    }
};