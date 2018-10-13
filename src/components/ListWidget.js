import React from 'react'
import {ControlLabel, DropdownButton, FormControl, FormGroup, MenuItem} from "react-bootstrap";

const ListWidget = ({widget})=>
    <ul>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>The Input</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Put each element in different row" value={widget.text}/>
      </FormGroup>
      <DropdownButton
          bsStyle="default"
          title={'Select the Type of list'}
          key={1}
          noCaret
          id={`dropdown-basic-${1}`}>
        <MenuItem eventKey="1">Ordered List</MenuItem>
        <MenuItem eventKey="2" active>Unordered List</MenuItem>
      </DropdownButton>
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Widget Name" />
      <p className={'my-3'}>Preview</p>
      {widget.items.split(",").map((item,index)=> <li key={index}>{item}</li>)}
      </ul>

export default ListWidget


