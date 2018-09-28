import React from 'react'
import ModuleList from '../components/ModuleList'

export default class CourseEditor extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(<div>
            <ModuleList/>
        </div>)
    }
}