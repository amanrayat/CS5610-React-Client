import React from 'react'
import {FormControl,ControlLabel , FormGroup} from "react-bootstrap";

const ParagraphWidget = ({widget,handleChange,preview}) =>{
    let input;
    return(
        <div>
            <div style={preview===true?{"display": "none"}:{"display": "inline"}}>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>The Input</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        onChange={()=>handleChange(widget.id , input.value)}
                        inputRef={(ref) => {input = ref}}
                        placeholder="textarea"
                        value={widget.text}/>
                </FormGroup>
                <FormControl
                    className={'my-3'}
                    componentClass="input"
                    type="text"
                    inputRef={(ref) => {this.input = ref}}
                    placeholder="Widget Name" />
                <p className={'my-3'}>Preview</p>
            </div>
            <p>{widget.text}</p>

        </div>
    )
}


export default ParagraphWidget