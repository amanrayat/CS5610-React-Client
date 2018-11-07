import axios from 'axios'
import UserService from './UserService'
let courses =  [
    {
        "id": 1,
        "title": "Course 1",
        "OwnedBy" : "Aman",
        "modules": [
            {
                "id": 11,
                "title": "Module 1 1",
                "lessons": [
                    {
                        "id": 111,
                        "title": "Lesson 1 1 1",
                        "topics": [
                            {"id" : 1111 , "title": "Topic 1 1 1 1" ,
                                "widgets": [
                                    {   "id" : 11111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 11112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 11113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 11114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 11115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 1112 , "title": "Topic 1 1 1 2" ,
                                "widgets" :[]
                            }
                        ]
                    },
                    {
                        "id": 112,
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {"id":1121 , "title": "Topic 1 1 2 1" ,
                                "widgets" :[]}
                        ]
                    }
                ]
            },
        ]
    },
    {
        "id": 2,
        "title": "Course 2",
        "OwnedBy" : "Jose",
        "modules": [
            {
                "id": 21,
                "title": "Module 2 1",
                "lessons": [
                    {
                        "id": 211,
                        "title": "Lesson 2 1 1",
                        "topics": [
                            {"id" : 2111 , "title": "Topic 2 1 1 1" ,
                                "widgets": [
                                    {   "id" : 21111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 21112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 21114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 21115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 2112 , "title": "Topic 2 1 1 2" ,
                                "widgets" :[{   "id" : 21121,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 21122,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21123,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },]
                            }
                        ]
                    },
                    {
                        "id": 212,
                        "title": "Lesson 2 1 2",
                        "topics": [
                            {"id":2121 , "title": "Topic 2 1 2 1" ,
                                "widgets" :[{   "id" : 21211,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 21212,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 21213,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },]}
                        ]
                    }
                ]
            },
        ]
    },
    {
        "id": 3,
        "title": "Course 3",
        "OwnedBy" : "Mike",
        "modules": [
            {
                "id": 31,
                "title": "Module 3 1",
                "lessons": [
                    {
                        "id": 311,
                        "title": "Lesson 3 1 1",
                        "topics": [
                            {"id" : 3111 , "title": "Topic 3 1 1 1" ,
                                "widgets": [
                                    {   "id" : 31111,
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {   "id" : 31112,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {   "id" : 31113,
                                        "type": "LIST",
                                        "order" :"ordered",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {   "id" : 31114,
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {   "id" : 31115,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : 3112 , "title": "Topic 3 1 1 2" ,
                                "widgets" :[{   "id" : 31121,
                                    "type": "HEADING",
                                    "size": 1,
                                    "text": "The Document Object Model"
                                },
                                    {   "id" : 31122,
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    }]
                            }
                        ]
                    },
                    {
                        "id": 312,
                        "title": "Lesson 3 1 2",
                        "topics": [
                            {"id":3121 , "title": "Topic 3 1 2 1" ,
                                "widgets" :[ {   "id" : 31211,
                                    "type": "IMAGE",
                                    "src": "https://picsum.photos/200"
                                },
                                    {   "id" : 31212,
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }]}
                        ]
                    }
                ]
            },
        ]
    },
];

class CourseService {
    UserService = new UserService();
    findCourseNameByCourseId = (courseId)=>{
        this.findCourseById(courseId)
    };

    findCourseById = (courseId)=>{
        return axios("http://localhost:8080/api/course/"+courseId)

    };

    findAllCourses = ()=>{
        return axios({
            url:"http://localhost:8080/api/course",
            method: 'get',
            withCredentials: true
        });
    };

    createCourse = (course)=>{
        let newCourse = {
            "title" : course,
            "modules" : []

        };
        return axios({
            url:"http://localhost:8080/api/course" ,
            method: 'post',
            withCredentials: true,
            data:newCourse})
    };

    deleteCourse = (courseId)=>{
        return axios({
            url :"http://localhost:8080/api/course/"+courseId,
            method :'delete',
            withCredentials: true,
        })

    };

    editCourse =(courseId, courseName)=>{
        return axios({
            url : "http://localhost:8080/api/course/"+courseId,
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
            url : "http://localhost:8080/api/course/"+courseId+"/module",
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
            url:"http://localhost:8080/api/course/"+courseId+"/module",
            method : 'post',
            withCredentials: true,
            data : obj
        });

    };

    deleteModuleForCourseId = (moduleId) => {
        return axios({
            url :"http://localhost:8080/api/module/"+moduleId,
            method : 'delete',
            withCredentials: true
        })
    };

    updateModuleListItem = (moduleId , moduleName)=>{
        return axios({
            url : "http://localhost:8080/api/module/"+moduleId,
            data : {title:moduleName},
            method : 'put',
            withCredentials: true,

        })
    };

    findAllLessonsForModule = (moduleId)=>{
        return axios({
            url : "http://localhost:8080/api/module/"+moduleId+"/lesson",
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
            url : "http://localhost:8080/api/module/"+moduleId+"/lesson" ,
            data : obj,
            withCredentials: true,
        })
    };

    deleteLessonForModuleId = (lessonId)=>{
        return axios({
            url : "http://localhost:8080/api/lesson/" + lessonId,
            method : 'delete',
            withCredentials: true
        })
    };

    updateLesson =(lessonId , lessonName)=>{
        return axios({
            url: "http://localhost:8080/api/lesson/" + lessonId,
            data: {title: lessonName},
            method : 'put',
            withCredentials: true
        })

    };

    findAllTopicForModule = (LessonId)=>{
        return axios({
            url : "http://localhost:8080/api/lesson/"+LessonId+"/topic",
            method : 'get',
            withCredentials: true,
        })

    };

    deleteTopicForLessonId =(topicId)=>{
        return axios({
            method : 'delete',
            url: "http://localhost:8080/api/topic/"+topicId,
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
            url : "http://localhost:8080/api/lesson/"+lessonId+"/topic" ,
            data : obj,
            withCredentials: true,
        })
    };

    updateTopic =(topicId ,topicName)=>{
        return axios({
            url : "http://localhost:8080/api/topic/"+topicId,
            data : {title : topicName},
            method : 'put' ,
            withCredentials: true
        })
    };

    findTopicById = (topicId) => {
        return axios({
            url : "http://localhost:8080/api/topic/"+topicId,
            withCredentials: true,
            method : 'get'
        }).then((res)=>{
            return res.data
        })
    };





    findWidgets = (topicId)=> {
        return axios({
            url : "http://localhost:8080/api/topic/"+topicId+"/widget",
            method : 'get',
            withCredentials: true,
        }).then((res)=>{
            console.log("the res from findWidget is "  , res)
            return res.data
        })
    };


    arrowUp = (topicId , widgetId)=>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        let widgets = this.findWidgets(topicId);
        for(let i=0;i<widgets.length;i++){
            if(widgets[i].id === widgetId){
                newWidgetList.pop();
                newWidgetList.push(widgets[i]);
                newWidgetList.push(widgets[i-1]);
            }
            else{
                newWidgetList.push(widgets[i]);
            }
        }
        topic.widgets = newWidgetList;

    };

    arrowDown = (topicId , widgetId)=>{
        let topic = this.findTopicById(topicId);
        let newWidgetList =[];
        let widgets = this.findWidgets(topicId);
        for(let i=0;i<widgets.length;i++){
            if(widgets[i].id === widgetId){
                newWidgetList.push(widgets[i+1]);
                newWidgetList.push(widgets[i]);
                i++;
            }
            else{
                newWidgetList.push(widgets[i]);
            }
        }
        topic.widgets = newWidgetList;
    };


}
export default CourseService;
