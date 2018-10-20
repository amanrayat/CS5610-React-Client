import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import Login from '../components/Login'
import Register from "../components/Register";


const CourseManager  = ()=>{
    return(
        <Router>
            <div className={'height_full'}>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/courses' component={CourseList}/>
                <Route path='/course/:courseId' component={CourseEditor}/>
            </div>
        </Router>
    )
};
export default CourseManager;