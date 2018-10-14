import React from 'react'
import {connect} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent'
import widgets from "../reducers/widgets";
// import WidgetListNew from "../components/WidgetListNew";


const stateToPropertyMapper = state =>({
    widgets : state.widgets,
    preview : state.preview
});

const dispatcherToPropertyMapper = dispatch =>({
    init:(widgets , topic) =>dispatch({
        type:"INIT",
        widgets: widgets,
        topic:topic
    }),
    deleteWidget: (widget)=> dispatch({
        type :'DELETE_WIDGET',
        widget:widget
    }),
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
    headingChange : (widget , id)=>dispatch({
        type : 'HEADING_CHANGE',
        widget : widget,
        id: id
    }),
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
        handleSave : ()=>dispatch({
           type : "HANDLE_SAVE"
        }),
    updateWidget : widget=>dispatch({
        type:'UPDATE_WIDGET',
        widget:widget
    }),
    addWidget: ()=> dispatch({
        type: 'CREATE_WIDGET'
    }),
    changeType: (widget , kind)=> dispatch({
        type :'CHANGE_TYPE',
        widget:widget,
        kind : kind
    })
})

const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer