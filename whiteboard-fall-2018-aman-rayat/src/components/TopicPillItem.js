import React from 'react';

const TopicPillItem = (props)=>{
    this.deleteTopic = ()=>{
      props.deleteTopic(props.topic.id)
    };
    return(
        <li className=" nav-item m-5" key={props.topic.id}>
            <div className='row'>
                <div>
                    <button className={'btn'}><h5>{props.topic.title}</h5></button>
                </div>
                <div className={'mx-5'}>
                    <button onClick={this.deleteTopic}
                            type="button"
                            className="btn btn-sm btn-outline-danger btn-inline">
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
}
export default TopicPillItem