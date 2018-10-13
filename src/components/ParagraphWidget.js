import React from 'react'
import {FormControl,ControlLabel , FormGroup} from "react-bootstrap";

const ParagraphWidget = ({widget}) =>
    <div>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>The Input</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" value={widget.text}/>
      </FormGroup>
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Widget Name" />
      <p className={'my-3'}>Preview</p>
      <p>{widget.text}</p>

    </div>

export default ParagraphWidget