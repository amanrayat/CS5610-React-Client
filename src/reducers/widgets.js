import CourseService from '../service/CourseService'

this.CourseService = new CourseService();

const widgets = (state={widgets:[]} , action)=>{
  console.log("the state is " , state)
  console.log("the action is " , action)
        switch(action.type) {
            case "INIT":
                return {
                    widgets: this.CourseService.findWidgets(action.topic.id),
                    selectedTopic: action.topic
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

            case "UPDATE_WIDGET" :
                return {

                };
            case "FIND_WIDGET" :
                return {

                };
            case "FIND_ALL_WIDGETS_FOR_TOPIC" :
                return {

                };
            case "FIND_ALL_WIDGETS" :
                return {

                };
            default : return state

        }
}
// export default widgets

// const widgets = (state = {widgets:[] , action})=>({
//     widgets : [
//         {title:"w111"},{title:"w222"},{title:"w333"},{title:"w444"}
//     ]
// })

export default widgets