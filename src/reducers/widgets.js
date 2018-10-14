import CourseService from '../service/CourseService'

this.CourseService = new CourseService();

const widgets = (state={widgets:[],preview:false} , action)=>{
    switch(action.type) {
        case "INIT":
            return {
                widgets: this.CourseService.findWidgets(action.topic.id),
                selectedTopic: action.topic,
                preview : state.preview
            };
        case "CREATE_WIDGET" :
            this.CourseService.createWidget(state.selectedTopic.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "DELETE_WIDGET" :
            this.CourseService.deleteWidget(action.widget.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "PREVIEW" :
            return{
                preview : action.decision,
                widgets: state.widgets
            };
        case "CHANGE_TYPE":
            this.CourseService.changeWidget(state.selectedTopic.id , action.widget.id , action.kind);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "ARROW_UP" :
            this.CourseService.arrowUp(state.selectedTopic.id , action.widget.id);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "ARROW_DOWN":
            this.CourseService.arrowDown(state.selectedTopic.id , action.widget.id);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "HEADING_CHANGE":
            this.CourseService.headingChange(state.selectedTopic.id , action.widget.id , action.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "LIST_CHANGE":
            this.CourseService.listChange(state.selectedTopic.id , action.widget.id , action.id);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };

        case "HANDLE_CHANGE":
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.text = action.input
                    }
                    return Object.assign({} , widget)
                })
            };
        case "HANDLE_CHANGE_LIST" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.items = action.input
                    }
                    return Object.assign({} , widget)
                })
            };
        case "HANDLE_CHANGE_IMAGE" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.src = action.input
                    }
                    return Object.assign({} , widget)
                })
            };
        case "HANDLE_CHANGE_TEXT" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.title = action.input
                    }
                    return Object.assign({} , widget)
                })
            };
        case "HANDLE_CHANGE_HREF" :
            return{
                widgets :state.widgets.map(widget=>{
                    if(widget.id === action.widgetId){
                        widget.href = action.input
                    }
                    return Object.assign({} , widget)
                })
            };
        case "HANDLE_SAVE" :
            this.CourseService.saveWidgetsForTopic(state.selectedTopic.id , state.widgets);
            return{
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "UPDATE_WIDGET" :
            this.CourseService.saveWidgetsForTopic(state.selectedTopic.id , state.widgets);
            return {
                widgets: this.CourseService.findWidgets(state.selectedTopic.id)
            };
        case "FIND_WIDGET" :
            return {
                widget : this.CourseService.findWidget(action.widgetId)
            };
        case "FIND_ALL_WIDGETS_FOR_TOPIC" :
            return {
                widgets: this.CourseService.findWidgets(action.topic.id),
            };
        case "FIND_ALL_WIDGETS" :
            return {
                widgets: this.CourseService.findWidgets(action.topic.id),
            };
        default : return state

    }
};

export default widgets