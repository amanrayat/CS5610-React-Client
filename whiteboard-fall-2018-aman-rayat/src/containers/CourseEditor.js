import React from 'react'
import ModuleList from '../components/ModuleList'

export default class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseId : ''
        }
    }
    componentDidMount(){
        console.log("the course editor "  ,this.props.match.params.courseId )
        this.setState({
            courseId : this.props.match.params.courseId
        })
    }
    render(){
        return(<div>
            <ModuleList courseId = {this.state.courseId}/>
        </div>)
    }
}