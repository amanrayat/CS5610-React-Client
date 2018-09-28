import React from 'react'

const ModuleListItem = (props)=>{
    this.onDelete = ()=>{
        console.log("deltesd");
    };
    return (
        <li className=" background_black list-group-item "><button onClick={this.onloadLesson} className={props.id ===props.selected ? 'selected btn background_black '  :'background_black btn' }>{props.title}</button>
            <button onClick={this.onDelete}
                    className='btn float-right btn-outline-danger'>
                <i className="fa fa-times "/>
            </button>
        </li>
    )
};
export default ModuleListItem;