import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import CourseManager from "./containers/CourseManager";

ReactDom.render(<CourseManager/>,document.getElementById('root'));