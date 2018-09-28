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
                            {"id" : "3456" , "title": "Topic 1 1 1 1"}
                        ]
                    },
                    {
                        "id": "234",
                        "title": "Lesson 1 1 2",
                        "topics": [
                            {"id":"123" , "title": "Topic 1 1 2 1"}
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
    {
        "id": "234",
        "title": "Course 2",
        "OwnedBy" : "Jose Annunziato",
        "modules": [
            {
                "id": "345",
                "title": "Module 2 1",
                "lessons": [
                    {
                        "id": "567",
                        "title": "Lesson 1 3 1",
                        "topics":[]
                    },
                    {
                        "id": "678",
                        "title": "Lesson 1 3 2",
                        "topics":[]
                    }
                ]
            },
            {
                "id": "456",
                "title": "Module 2 2",
                "lessons":[]
            }
        ]
    },
    {
        "id": "345",
        "title": "Course 3",
        "OwnedBy" : "Rajmohan Rajaraman",
        "modules": [
            {
                "id": "567",
                "title": "Module 3 1",
                "lessons":[]
            },
            {
                "id": "678",
                "title": "Module 3 2",
                "lessons" : []
            }
        ]
    },
    {
        "id": "456",
        "title": "Course 4",
        "OwnedBy" : "Mike ",

    }
];

class CourseService {

    findCourseById = (courseId)=>{
        let result = [];
        courses.forEach((course)=>{
            if(course.id == courseId){
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
            "OwnedBy":"Aman"
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

    findModuleByModuleIdCourseId = (moduleId , courseId)=>{
        let result =[];
        this.findCourseById(courseId).modules.forEach((module)=>{
            if(module.id == moduleId) result =  module
        });

        return result;
    };
    findAllModulesForCourseId = (courseId) => {
        let result =[];
        courses.forEach((course)=>{if(course.id==courseId)result = course.modules;});
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
            if(course.id == courseId){
                course.modules  = [...course.modules , obj];
            }
        });
    };
    deleteModuleForCourseId = (moduleId , courseId) => {
        courses.forEach((course) =>{
            if(course.id == courseId){
                course.modules.forEach((module , index)=>{
                    if(module.id == moduleId){
                        course.modules.splice(index , 1)
                    }
                })
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
            if(lesson.id == lessonId){
                lessonsList.splice(index,1)
            }
        })

    };

    findAllTopicForModule = (courseId,ModuleId,LessonId)=>{
        let result =[];
        this.findAllLessonsForModule(courseId,ModuleId).forEach((lesson)=>{
            if(lesson.id == LessonId){
                result = lesson;
            }
        });
        return result;
    };
    deleteTopicForLessonId =(courseId,moduleId,lessonId,topicId)=>{
        let topics = this.findAllTopicForModule(courseId,moduleId ,lessonId).topics;
        topics.forEach((topic,index)=>{
            if(topic.id = topicId){
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
    }
}
export default CourseService;
export {courses};