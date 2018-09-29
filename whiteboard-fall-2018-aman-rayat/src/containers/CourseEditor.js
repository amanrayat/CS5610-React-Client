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
        this.setState({
            courseId : this.props.match.params.courseId
        })
    }
    render(){
        return(<div className={'height_full'}>
            <ModuleList courseId = {this.state.courseId}/>
        </div>)
    }
}