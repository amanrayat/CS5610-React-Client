import CourseService from '../service/CourseService'

this.CourseService = new CourseService();

const widgets = (state={widgets:[],preview:false} , action)=>{
    switch(action.type) {
        case "INIT":
            return {
                widgets: state.widgets.length>0 && state.selectedTopic.id === action.topic.id ? state.widgets : this.CourseService.findWidgets(action.topic.id),
                selectedTopic: action.topic,
                preview : state.preview
            };
        case "CREATE_WIDGET" :
            this.CourseService.createWidget(state.selectedTopic.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic

            };
        case "DELETE_WIDGET" :
            let newWidgets =[];
            state.widgets.map((widget)=>{
                if(widget.id !== action.widget.id){
                    newWidgets.push(widget)
                }
            });
            return {
                widgets: newWidgets,
                selectedTopic: state.selectedTopic
            };
        case "PREVIEW" :
            return{
                preview : action.decision,
                widgets: state.widgets,
                selectedTopic: state.selectedTopic
            };
        case "CHANGE_TYPE":
            this.CourseService.changeWidget(state.selectedTopic.id , action.widget.id , action.kind);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "ARROW_UP" :
            this.CourseService.arrowUp(state.selectedTopic.id , action.widget.id);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "ARROW_DOWN":
            this.CourseService.arrowDown(state.selectedTopic.id , action.widget.id);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "HEADING_CHANGE":
            this.CourseService.headingChange(state.selectedTopic.id , action.widget.id , action.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "LIST_CHANGE":
            this.CourseService.listChange(state.selectedTopic.id , action.widget.id , action.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
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
                        widget.title = action.input
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
            this.CourseService.saveWidgetsForTopic(state.selectedTopic.id , state.widgets);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "UPDATE_WIDGET" :
            this.CourseService.updateWidget(state.selectedTopic.id , action.widget);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id),
                selectedTopic: state.selectedTopic
            };
        case "FIND_WIDGET" :
            return {
                widget : this.CourseService.findWidget(action.widgetId),
                selectedTopic: state.selectedTopic
            };
        case "FIND_ALL_WIDGETS_FOR_TOPIC" :
            return {
                widgets: this.CourseService.findWidgets(action.topic.id),
                selectedTopic: state.selectedTopic
            };
        case "FIND_ALL_WIDGETS" :
            return {
                widgets: this.CourseService.findWidgets(action.topic.id),
                selectedTopic: state.selectedTopic
            };
        default : return state

    }
};
    
export default widgets