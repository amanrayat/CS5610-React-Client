import React from 'react';
import TopicPillItem from './TopicPillItem'
import {FormControl} from "react-bootstrap";
import CourseService from "../service/CourseService";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import widgets from '../reducers/widgets'
import WidgetListContainer from '../containers/WidgetListContainer'
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
        this.reRender();

    }
    componentWillReceiveProps(newProps){
        this.courseService.findAllTopicForModule(newProps.lessonId).then((res)=>{
            this.setState({
                topic:res.data? res.data[0]:null,
                topics : res.data? res.data:[],
                topicId : res.data[0]? res.data[0].id:null
            })
        })
    }

    reRender= ()=>{
        this.courseService.findAllTopicForModule(this.props.lessonId).then((res)=>{
            this.setState({
                topic:res.data? res.data[0]:null,
                topics : res.data? res.data:[],
                topicId : res.data[0]? res.data[0].id:null
            })
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
        this.courseService.deleteTopicForLessonId(id).then(()=>{
            this.reRender();
        })
    };

    addTopic=()=>{
        this.courseService.addNewTopicforLesson(this.props.lessonId , this.input.value).then(()=>{
            this.reRender();
            this.input.value="";
        })

    };
    updateTopic=(id ,value)=>{
        this.courseService.updateTopic(id ,value).then(()=>{
            this.reRender();
        })
    };
    selectTopic =(id)=>{
        this.courseService.findTopicById(id).then((res)=>{
            this.setState({
                topicId:id,
                topic : res
            })
        })
    };

    renderTopics = ()=>{
        if(this.state.topics){
            return (
                this.state.topics.map((topic) => {
                    return(
                        <TopicPillItem key={topic.id}
                                       updateTopic={this.updateTopic}
                                       topic={topic}
                                       selectTopic={this.selectTopic}
                                       classname={this.state.topicId===topic.id?'selected btn':'btn'}
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
        console.log("the topic pill rerendered and the state is " , this.state)
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

                { this.state.topic &&
                <Provider store={store}>
                    <WidgetListContainer  topic={this.state.topic} widgetsInit={this.state.topic.widgets}/>
                </Provider>}
            </div>

        )
    }
};