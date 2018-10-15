import React from 'react'
import {FormControl,ControlLabel , FormGroup} from "react-bootstrap";

const ParagraphWidget = ({widget,handleChange,preview}) =>{
    let input;
    return(
        <div>
            <div style={preview?{"display": "none"}:{"display": "inline"}}>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>The Input</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        onChange={()=>handleChange(widget.id , input.value)}
                        inputRef={(ref) => {input = ref}}
                        placeholder="Paragraph text. You can Inject HTML as well"
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
            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: widget.text }}/>
        </div>
    )
};

export default ParagraphWidget