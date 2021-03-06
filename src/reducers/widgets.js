import CourseService from '../service/CourseService'
import axios from "axios";

this.CourseService = new CourseService();

const widgets = (state={widgets:[],preview:false} , action)=>{
    switch(action.type) {
        case "INIT":
            return {
                widgets:  action.widgets ,
                selectedTopic: action.topic,
                preview : state.preview
            };
        case "CREATE_WIDGET" :
            let widget = {"id" : Math.round(Math.random()*1000000),"widgetType" : "HEADING", "size": 1,"text": "AutoGenerated Text" , "item":" " , "ordered":"" , "src" : " " };
            let newWidget = [...state.widgets];
            newWidget.push(widget)
            return {
                widgets : newWidget,
                update : true
            };

        case "DELETE_WIDGET" :
             axios({
                method : 'delete',
                url: "http://localhost:8080/api/widget/"+action.widget.id,
                withCredentials: true
            });
            return {
                widgets: state.widgets.filter(widget=>widget.id!==action.widget.id),
                selectedTopic: state.selectedTopic,
                preview : false
            };
        case "PREVIEW" :

            return{
                preview : action.decision,
                widgets: state.widgets,
                selectedTopic: state.selectedTopic
            };
        case "CHANGE_TYPE":
            return {
            widgets :state.widgets.map(widget=>{
                if(widget.id === action.widget.id){
                    if(action.kind ===1) {
                        widget.widgetType="HEADING"
                    }
                    else if(action.kind ===2){
                        widget.widgetType="PARAGRAPH"

                    }
                    else if(action.kind ===3){
                        widget.widgetType="LIST"

                    }
                    else if(action.kind ===4){
                        widget.widgetType="IMAGE"

                    }
                    else{
                        widget.widgetType="LINK"

                    }
                }
                return Object.assign({} , widget)
            }),
                selectedTopic: state.selectedTopic
        };
        case "ARROW_UP" :
            let newWidgetList =[];

            for(let i=0;i<state.widgets.length;i++){
                if(state.widgets[i].id === action.widget.id){
                    newWidgetList.pop();
                    newWidgetList.push(state.widgets[i]);
                    newWidgetList.push(state.widgets[i-1]);
                }
                else{
                    newWidgetList.push(state.widgets[i]);
                }
            }


            return{
                widgets: newWidgetList,
                selectedTopic: state.selectedTopic
            };
        case "ARROW_DOWN":
            let newWidgetList2 =[];
            for(let i=0;i<state.widgets.length;i++){
                if(state.widgets[i].id === action.widget.id){
                    newWidgetList2.push(state.widgets[i+1]);
                    newWidgetList2.push(state.widgets[i]);
                    i++;
                }
                else{
                    newWidgetList2.push(state.widgets[i]);
                }
            }

            return{
                widgets: newWidgetList2,
                selectedTopic: state.selectedTopic
            };
        case "HEADING_CHANGE":
            return {
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widget.id){
                        widget.size = action.id
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "LIST_CHANGE":
            return {
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widget.id){
                        widget.order = action.id===1?"ordered":"unordered"
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };

        case "HANDLE_CHANGE":
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.text = action.input
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "HANDLE_CHANGE_LIST" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.items = action.input
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "HANDLE_CHANGE_IMAGE" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.src = action.input
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "HANDLE_CHANGE_TEXT" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.text = action.input
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "HANDLE_CHANGE_HREF" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.href = action.input
                    }
                    return Object.assign({} , widget)
                }),
                selectedTopic: state.selectedTopic
            };
        case "HANDLE_SAVE" :
            axios({
                method : 'post',
                url : "http://localhost:8080/api/topic/"+action.topic.id+"/widget/save" ,
                data : action.widgets,
                withCredentials: true,
            });
            return{
                widgets: state.widgets,
                selectedTopic: state.selectedTopic
            };

        default : return state

    }
};
    
export default widgets