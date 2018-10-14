import React from 'react'
import {FormControl} from "react-bootstrap";
import {MenuItem , DropdownButton} from "react-bootstrap";

const HeadingWidget = ({widget})=>{
    console.log("the widget is " , widget);
  return(
      <div>
        <FormControl
            className={'my-3'}
            componentClass="input"
            type="text"
            inputRef={(ref) => {this.input = ref}}
            placeholder="Heading Text" />
        <DropdownButton
            bsStyle="default"
            title={`HEADING ${widget.size}`}
            key={1}
            noCaret
            id={`dropdown-basic-${1}`}>
          <MenuItem eventKey="1">Heading 1</MenuItem>
          <MenuItem eventKey="2">Heading 2</MenuItem>
          <MenuItem eventKey="3" active>Heading 3</MenuItem>
          <MenuItem eventKey="4">Heading 4 </MenuItem>
        </DropdownButton>

        <FormControl
            className={'my-3'}
            componentClass="input"
            type="text"
            inputRef={(ref) => {this.input = ref}}
            placeholder="Widget Name" />
        <p className={'my-3'}>Preview</p>
        {widget.size===1 && <h1>{widget.type}</h1>}
        {widget.size===2 && <h2>{widget.type}</h2>}
        {widget.size===3 && <h3>{widget.type}</h3>}
        {widget.size===4 && <h4>{widget.type}</h4>}

      </div>

  )
}


export default HeadingWidget
