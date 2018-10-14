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
                            {"id" : "987" , "title": "Topic 1 1 1 2" ,
                                "widgets" :[{"id" : 11121,"title" : "zozo"} , {"id" : 11122,"title" : "dodo"}]
                            }
                        ]
                    },
                    {
                        "id": "234",
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {"id":"123" , "title": "Topic 1 1 2 1" ,
                                "widgets" :[{"id" : 11131,"title" : "yooy"} , {"id" : 11132,"title" : "mom"}]}
                        ]
                    }
                ]
            },
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

    createWidget = (topicId)=> {
        let widget = {"id":1 ,"type" : "HEADING", "size": 1,"text": "AutoGenerated Text" }
        let topic = this.findTopicById(topicId);
        let oldWidgets = topic.widgets;
        topic.widgets = [...oldWidgets , widget];
    };
    findWidgets = (topicId)=>{
        console.log("i am called" , topicId)
      console.log("i am sending back " , this.findTopicById(topicId).widgets)
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
    changeWidget = (topicId, widgetId,kind) =>{
      let topic = this.findTopicById(topicId)
      let newWidgetList =[];
      this.findWidgets(topicId).forEach((widget)=>{
          if(widget.id != widgetId){
              newWidgetList.push(widget)
          }
          else{
              kind===1 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 1 , "text" : ""})
              kind===2 && newWidgetList.push({"id":widget.id ,"type":"PARAGRAPH" ,"text": ""})
              kind===3 && newWidgetList.push({"id":widget.id ,"type":"LIST" ,"items": ""})
              kind===4 && newWidgetList.push({"id":widget.id ,"type":"IMAGE" ,"src": ""})
              kind===5 && newWidgetList.push({"id":widget.id ,"type":"LINK" ,"title": "" , "href" : ""})
          }
      });
      topic.widgets = newWidgetList
    };

    arrowUp = (topicId , widgetId)=>{
      let topic = this.findTopicById(topicId)
      let newWidgetList =[];
      let widgets = this.findWidgets(topicId);
      for(let i=0;i<widgets.length;i++){
        if(widgets[i].id == widgetId){
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
      let topic = this.findTopicById(topicId)
      let newWidgetList =[];

      let widgets = this.findWidgets(topicId);
      for(let i=0;i<widgets.length;i++){
          if(widgets[i].id == widgetId){
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

    headingChange = (topicId , widgetId , id) =>{
      let topic = this.findTopicById(topicId)
      let newWidgetList =[];
      this.findWidgets(topicId).forEach((widget)=>{
        if(widget.id != widgetId){
          newWidgetList.push(widget)
        }
        else{
          id===1 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 1 , "text" : widget.text})
          id===2 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 2 , "text" : widget.text})
          id===3 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 3 , "text" : widget.text})
          id===4 && newWidgetList.push({"id":widget.id ,"type":"HEADING" ,"size": 4 , "text" : widget.text})
        }
      });
      topic.widgets = newWidgetList
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