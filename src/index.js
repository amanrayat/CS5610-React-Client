import React from 'react'
import ReactDom from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import CourseManager from "./containers/CourseManager";
import Profile from "./components/Profile";

ReactDom.render(<CourseManager/>,document.getElementById('root'));