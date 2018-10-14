import React from 'react'
import {FormControl} from "react-bootstrap";

const LinkWidget = ({widget , handleChangeText , handleChangeHref})=>{
    let input1,input2;
    return(
        <div>
            <FormControl
                className={'my-3'}
                componentClass="input"
                onChange={()=>handleChangeText(widget.id , input1.value)}
                type="text"
                value={widget.title}
                inputRef={(ref) => {input1 = ref}}
                placeholder="Link Text" />
            <FormControl
                className={'my-3'}
                componentClass="input"
                onChange={()=>handleChangeHref(widget.id , input2.value)}
                type="text"
                value={widget.href}
                inputRef={(ref) => {input2 = ref}}
                placeholder="Link" />
            <FormControl
                className={'my-3'}
                componentClass="input"
                type="text"
                inputRef={(ref) => {this.input = ref}}
                placeholder="Widget Name" />
            <a href={widget.href}>{widget.title}</a>
        </div>
    )
};

export default LinkWidget