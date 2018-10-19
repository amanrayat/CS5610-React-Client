import React from 'react';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseTableHeading from "../components/CourseTableHeading";
import CourseService from "../service/CourseService";

export default class CourseList extends React.Component{

    constructor(){
        super();
        this.courseService = new CourseService();
        this.state = {
            view : 0,
            courses :[{"id" : 1 , "title" : "aman" , "owner" : "aman"}]
        }
    };

    componentDidMount(){
        this.renderCourses();
    }

    renderCourses = ()=>{
        this.courseService.findAllCourses().then((res)=>{
            this.setState({courses : res.data});
        })

    };

    changeView = ()=>{
        this.setState({
            view : !this.state.view
        })
    };

    addCourse = (val)=>{
        this.courseService.createCourse(val);
        this.renderCourses();
    };

    deleteCourse =(id)=>{
        this.courseService.deleteCourse(id);
        this.renderCourses();
    };

    render(){
        console.log("the state is " , this.state)
        return (
            <div>
            <CourseTableHeading addCourse={this.addCourse} changeView={this.changeView}/>
            {this.state.view?<CourseTable delete={this.deleteCourse} courses={this.state.courses}/>:<CourseGrid delete={this.deleteCourse} courses={this.state.courses}/>}
            </div>
        )
    }
}