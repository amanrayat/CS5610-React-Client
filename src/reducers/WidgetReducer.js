import CourseService from '../service/CourseService'

this.CourseService = new CourseService();

const widgets = (state={widgets:[]} , action)=>{
        switch(action.type) {
            case "INIT":
                return {
                    widgets : this.CourseService.findWidgets(action.topicId),
                    selectedTopic : action.topicId
                };
            case "CREATE_WIDGET" :
                return {
                    widgets :action.topiczid
                };
            case "DELETE_WIDGET" :
                return {

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
export default widgets