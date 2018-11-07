import {connect} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent'
import axios from "axios";

import widgets from "../reducers/widgets";

const stateToPropertyMapper = state =>({
    widgets : state.widgets,
    preview : state.preview
});

const dispatcherToPropertyMapper = dispatch =>({
    init:(widgets , topic) =>{
        axios({
            url : "http://localhost:8080/api/topic/"+topic.id+"/widget",
            method : 'get',
            withCredentials: true,
        }).then((res)=>{
            console.log("the res is" , res)
            dispatch({
                type:"INIT",
                widgets: res.data,
                topic:topic
            })
        })
        },
    reRender : (topic) =>dispatch({
        type:"RERENDER",
        topic : topic
    }),
    deleteWidget: (widget , topic)=> {
        axios({
            url : "http://localhost:8080/api/topic/"+topic.id+"/widget",
            method : 'get',
            withCredentials: true,
        }).then((res)=>{
            console.log("dfsdfdsafsd" , res)
            dispatch({
                type :'DELETE_WIDGET',
                widget:widget,
                widgets : res.data
            })
        })
        },
    arrowUp :(widget)=>dispatch({
        type : "ARROW_UP",
        widget : widget
    }),
    arrowDown : (widget)=> dispatch({
        type : "ARROW_DOWN",
        widget : widget
    }),
    previewClick : (decision)=>dispatch({
            type : "PREVIEW",
            decision : decision
        }),
    headingChange : (widget , id)=>{
        dispatch({
        type : 'HEADING_CHANGE',
        widget : widget,
        id: id
    })},
    listChange : (widget , id) => dispatch({
        type : "LIST_CHANGE",
        widget : widget,
        id:id
    }),
    handleChange : (widgetId , input)=> dispatch({
        type: "HANDLE_CHANGE",
        widgetId : widgetId,
        input : input
    }),
    handleChangeList : (widgetId , input)=> dispatch({
        type: "HANDLE_CHANGE_LIST",
        widgetId : widgetId,
        input : input
    }),
    handleChangeImage : (widgetId , input)=> dispatch({
        type: "HANDLE_CHANGE_IMAGE",
        widgetId : widgetId,
        input : input
    }),
    handleChangeText : (widgetId , input)=> dispatch({
        type: "HANDLE_CHANGE_TEXT",
        widgetId : widgetId,
        input : input
    }),
    handleChangeHref : (widgetId , input)=> dispatch({
        type: "HANDLE_CHANGE_HREF",
        widgetId : widgetId,
        input : input
    }),
        handleSave : (topic , widgets)=>dispatch({
           type : "HANDLE_SAVE",
            topic:topic,
            widgets : widgets
        }),
    updateWidget : widget=>dispatch({
        type:'UPDATE_WIDGET',
        widget:widget
    }),
    addWidget: (topic)=> dispatch({

        type: 'CREATE_WIDGET',
        topic: topic,
        widgets : widgets
    }),
    changeType: (widget , kind)=> dispatch({
        type :'CHANGE_TYPE',
        widget:widget,
        kind : kind
    })
});

const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer