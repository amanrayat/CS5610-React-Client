import React from 'react'
import ReactDom from 'react-dom'
import CourseList from "./containers/CourseList";
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css'

ReactDom.render(<CourseList/>,document.getElementById('root'));