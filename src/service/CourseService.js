import axios from 'axios'
const URL = "https://guarded-lake-67462.herokuapp.com/";
// const URL = "http://localhost:8080/";

class CourseService {
    findCourseNameByCourseId = (courseId)=>{
        this.findCourseById(courseId)
    };

    findCourseById = (courseId)=>{
        return axios(URL + "api/course/"+courseId)

    };

    findAllCourses = ()=>{
        return axios({
            url:URL + "api/course",
            method: 'get',
            withCredentials: true
        });
    };

    createCourse = (course)=>{
        let newCourse = {
            "title" : course,
            "owner" : "Aman",
            "modules" : []

        };
        return axios({
            url:URL + "api/course" ,
            method: 'post',
            withCredentials: true,
            data:newCourse})
    };

    deleteCourse = (courseId)=>{
        return axios({
            url :URL + "api/course/"+courseId,
            method :'delete',
            withCredentials: true,
        })

    };

    editCourse =(courseId, courseName)=>{
        return axios({
            url : URL + "api/course/"+courseId,
            data : {title:courseName},
            method : 'put',
            withCredentials: true,
        })
    };

    findModuleByModuleIdCourseId = (moduleId , courseId)=>{
        let result =[];
        this.findCourseById(courseId).modules.forEach((module)=>{
            if(parseInt(module.id,10) === parseInt(moduleId,10)) result =  module
        });

        return result;
    };

    findAllModulesForCourseId = (courseId) => {
        return axios({
            url : URL + "api/course/"+courseId+"/module",
            method : 'get',
            withCredentials: true,
        });

    };

    createModuleForCourseId = (moduleName , courseId) => {
        let obj = {
            "title":moduleName,
            "lessons":[]
        };
        return axios({
            url:URL + "api/course/"+courseId+"/module",
            method : 'post',
            withCredentials: true,
            data : obj
        });

    };

    deleteModuleForCourseId = (moduleId) => {
        return axios({
            url :URL + "api/module/"+moduleId,
            method : 'delete',
            withCredentials: true
        })
    };

    updateModuleListItem = (moduleId , moduleName)=>{
        return axios({
            url : URL + "api/module/"+moduleId,
            data : {title:moduleName},
            method : 'put',
            withCredentials: true,

        })
    };

    findAllLessonsForModule = (moduleId)=>{
        return axios({
            url : URL + "api/module/"+moduleId+"/lesson",
            method:'get',
            withCredentials: true,
        })
    };

    createLessonForModuleId = ( moduleId,lessonName)=>{
        let obj = {
            "title":lessonName,
            "topics":[]
        };
        return axios( {
            method : 'post' ,
            url : URL + "api/module/"+moduleId+"/lesson" ,
            data : obj,
            withCredentials: true,
        })
    };

    deleteLessonForModuleId = (lessonId)=>{
        return axios({
            url : URL + "api/lesson/" + lessonId,
            method : 'delete',
            withCredentials: true
        })
    };

    updateLesson =(lessonId , lessonName)=>{
        return axios({
            url: URL + "api/lesson/" + lessonId,
            data: {title: lessonName},
            method : 'put',
            withCredentials: true
        })

    };

    findAllTopicForModule = (LessonId)=>{
        return axios({
            url : URL + "api/lesson/"+LessonId+"/topic",
            method : 'get',
            withCredentials: true,
        })

    };

    deleteTopicForLessonId =(topicId)=>{
        return axios({
            method : 'delete',
            url: URL + "api/topic/"+topicId,
            withCredentials: true
        })
    };

    addNewTopicforLesson =(lessonId,topicName)=>{
        let obj = {
            "title":topicName,
            "widgets" : []
        };
        return axios({
            method : 'post',
            url : URL + "api/lesson/"+lessonId+"/topic" ,
            data : obj,
            withCredentials: true,
        })
    };

    updateTopic =(topicId ,topicName)=>{
        return axios({
            url : URL + "api/topic/"+topicId,
            data : {title : topicName},
            method : 'put' ,
            withCredentials: true
        })
    };

    findTopicById = (topicId) => {
        return axios({
            url : URL + "api/topic/"+topicId,
            withCredentials: true,
            method : 'get'
        }).then((res)=>{
            return res.data
        })
    };

}
export default CourseService;
