import React from 'react';

const LessonTabItem = (props)=>{

    this.deleteLesson = ()=>{
        props.deleteLesson(props.lesson.id)
    };

    return(
        <ul className='nav nav-tabs'>
            <li className="nav-item">
                <span >
                    <button className={'btn'}>{props.lesson.title}</button>
                    <button onClick={this.deleteLesson} className='btn-sm btn btn-outline-danger'>
                        <i className="fa fa-times "/>
                    </button>
                </span>
            </li>
        </ul>
    )
}

export default LessonTabItem