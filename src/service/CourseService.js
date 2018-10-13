let courses =  [
    {
        "id": "123",
        "title": "Course 1",
        "OwnedBy" : "Aman",
        "modules": [
            {
                "id": "123",
                "title": "Module 1 1",
                "lessons": [
                    {
                        "id": "123",
                        "title": "Lesson 1 1 1",
                        "topics": [
                            {"id" : "3456" , "title": "Topic 1 1 1 1" ,
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {"id" : "987" , "title": "Topic 1 1 1 2" ,
                                "widgets" :[{"title" : "zozo"} , {"title" : "dodo"}]
                            }
                        ]
                    },
                    {
                        "id": "234",
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {"id":"123" , "title": "Topic 1 1 2 1" ,
                                "widgets" :[{"title" : "yooy"} , {"title" : "mom"}]}
                        ]
                    }
                ]
            },
            {
                "id": "234",
                "title": "Module 1 2",
                "lessons": [
                    {
                        "id": "345",
                        "title": "Lesson 1 2 1",
                        "topics": [
                            {"id" : "2345" , "title": "Topic 1 2 1 1"}
                        ]
                    },
                    {
                        "id": "456",
                        "title": "Lesson 1 2 2",
                        "topics": [
                            {"id" : "234" ,"title": "Topic 1 2 2 1"}
                        ]
                    }
                ]
            }
        ]
    },

];

class CourseService {

    findCourseNameByCourseId = (courseId)=>{
        let courseName;
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                courseName = course.title
            }
        });
        return courseName;
    }
    findCourseById = (courseId)=>{
        let result = [];
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                result =  course;
            }
        });
        return result
    };
    findAllCourses = ()=>{
        return courses;
    };

    createCourse = (course)=>{
        let id = new Date();
        let newCourses = [...courses];
        newCourses.push({
            "id":id,
            "title":course,
            "OwnedBy":"Aman",
            "modules":[]
        });
        courses = newCourses;
    };
    deleteCourse = (courseId)=>{
        courses.forEach((course,index)=>{
            if(course.id === courseId){
                courses.splice(index,1);
            }
        });
    };
    editCourse =(courseId, courseName)=>{
        this.findCourseById(courseId).title = courseName;
    }
    findModuleByModuleIdCourseId = (moduleId , courseId)=>{
        let result =[];
        this.findCourseById(courseId).modules.forEach((module)=>{
            if(parseInt(module.id,10) === parseInt(moduleId,10)) result =  module
        });

        return result;
    };
    findAllModulesForCourseId = (courseId) => {
        let result =[];
        courses.forEach((course)=>{if(parseInt(course.id,10)===parseInt(courseId,10))result = course.modules;});
        return result;
    };

    createModuleForCourseId = (moduleName , courseId) => {
        let id = Math.round((new Date()).getTime() / 1000);
        let obj = {
            "id":id,
            "title":moduleName,
            "lessons":[]
        };
        courses.forEach((course)=>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                course.modules  = [...course.modules , obj];
            }
        });
    };
    deleteModuleForCourseId = (moduleId , courseId) => {
        courses.forEach((course) =>{
            if(parseInt(course.id,10) === parseInt(courseId,10)){
                course.modules.forEach((module , index)=>{
                    if(parseInt(module.id,10) === parseInt(moduleId,10)){
                        course.modules.splice(index , 1)
                    }
                })
            }
        })
    };
    updateModuleListItem = (courseId, moduleId , moduleName)=>{
        this.findAllModulesForCourseId(courseId).forEach((module)=>{
            if(moduleId == module.id){
                module.title = moduleName
            }
        })
    };
    findAllLessonsForModule = (courseId , moduleId)=>{
        return this.findModuleByModuleIdCourseId (moduleId , courseId).lessons
    };
    createLessonForModuleId = ( courseId, moduleId,lessonName)=>{
        let id = Math.round((new Date()).getTime() / 100000);
        let obj = {
            "id":id,
            "title":lessonName,
            "topics":[]
        };
        this.findModuleByModuleIdCourseId(moduleId,courseId).lessons
            = [...this.findModuleByModuleIdCourseId(moduleId,courseId).lessons ,obj]
    };

    deleteLessonForModuleId = ( courseId, moduleId,lessonId)=>{
        let lessonsList =  this.findModuleByModuleIdCourseId(moduleId,courseId).lessons;
        lessonsList.forEach((lesson,index)=>{
            if(parseInt(lesson.id,10) === parseInt(lessonId,10)){
                lessonsList.splice(index,1)
            }
        })

    };
    updateLesson =(courseId, moduleId , lessonId , lessonName)=>{
        let lessonsList =  this.findModuleByModuleIdCourseId(moduleId,courseId).lessons;
        lessonsList.forEach((lesson)=>{
            if(lesson.id == lessonId){
                lesson.title = lessonName
            }
        })

    };
    findAllTopicForModule = (courseId,ModuleId,LessonId)=>{
        let result =[];
        this.findAllLessonsForModule(courseId,ModuleId).forEach((lesson)=>{
            if(parseInt(lesson.id,10) === parseInt(LessonId,10)){
                result = lesson;
            }
        });
        return result;
    };
    deleteTopicForLessonId =(courseId,moduleId,lessonId,topicId)=>{
        let topics = this.findAllTopicForModule(courseId,moduleId ,lessonId).topics;
        topics.forEach((topic,index)=>{
            if(parseInt(topic.id,10) === parseInt(topicId,10)){
                topics.splice(index,1)
            }
        });

    };
    addNewTopicforLesson =(courseId,moduleId,lessonId,topicName)=>{
        let id = Math.round((new Date()).getTime() / 100000);
        let obj = {
            "id":id,
            "title":topicName,
        };
        this.findAllTopicForModule(courseId,moduleId,lessonId).topics =
            [...this.findAllTopicForModule(courseId,moduleId,lessonId).topics,obj]
    };
    updateTopic =(courseId , moduleId ,lessonId , topicId ,topicName)=>{
        this.findAllTopicForModule(courseId , moduleId ,lessonId).topics.forEach((topic)=>{
            if(topic.id == topicId){
                topic.title=topicName
            }
        })
    };

    findTopicById = (topicId) => {
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        if(topic.id==topicId){
                            result = topic
                        }
                    })
                })
            }))
        });
        return result
    };

    createWidget = (topicId , widget)=> {
        let topic = this.findTopicById(topicId);
        let oldWidgets = topic.widgets;
        topic.widgets = [...oldWidgets , widget];
    };
    findWidgets = (topicId)=>{
        console.log("the topic id is " , topicId)
        return this.findTopicById(topicId).widgets;
    };
    findWidget = (widgetId)=>{
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                      topic.widgets.forEach((widget)=>{
                          if(widget.id == widgetId) result=widget
                      })
                    })
                })
            }))
        });
        return result
    };
    findTopicByWidgetId = (widgetId)=>{
        let result = null;
        courses.forEach((course)=>{
            course.modules.forEach((module=>{
                module.lessons.forEach((lesson)=>{
                    lesson.topics.forEach((topic)=>{
                        topic.widgets.forEach((widget)=>{
                            if(widget.id == widgetId) result=topic
                        })
                    })
                })
            }))
        });
        return result
    };

    updateWidget = (widgetId, widget)=>{

    };
    deleteWidget = (widgetId)=>{
        let result =[];
        let topic = this.findTopicByWidgetId(widgetId)
            topic.widgets.forEach((widget)=>{
            if(widget.id != widgetId){
                result.push(widget);
            }
        });
        topic.widgets = result
    };
}
export default CourseService;
export {courses};