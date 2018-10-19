import React from 'react'
import ModuleList from '../components/ModuleList'

export default class CourseEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courseId : null
        }
    }
    componentDidMount(){
        this.setState({
            courseId : parseInt(this.props.match.params.courseId)
        })
    }
    componentWillReceiveProps(newProps){
        this.setState({
            courseId : parseInt(newProps.match.params.courseId)
        })
    }
    render(){
        console.log("course editor",this.state)
        return(<div className={'height_full'}>
            <ModuleList courseId = {this.state.courseId}/>
        </div>)
    }
}