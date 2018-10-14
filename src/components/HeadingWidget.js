import React from 'react'
import {FormControl} from "react-bootstrap";
import {MenuItem , DropdownButton} from "react-bootstrap";

const HeadingWidget = ({widget,headingChange,handleChange , preview})=>{
    let input = ""
  return(
      <div>
          <div style={preview===true?{"display": "none"}:{"display": "inline"}}>
              <FormControl
                  className={'my-3'}
                  componentClass="input"
                  type="text"
                  value={widget.text}
                  inputRef={(ref) => {input = ref}}
                  onChange={()=>handleChange(widget.id , input.value)}
                  placeholder="Link Text" />
              <DropdownButton
                  bsStyle="default"
                  title={`HEADING ${widget.size}`}
                  key={1}
                  noCaret
                  id={`dropdown-basic-${1}`}>
                  <MenuItem eventKey="1" onSelect={()=>headingChange(widget , 1)}>Heading 1</MenuItem>
                  <MenuItem eventKey="2" onSelect={()=>headingChange(widget , 2)}>Heading 2</MenuItem>
                  <MenuItem eventKey="3" onSelect={()=>headingChange(widget , 3)}>Heading 3</MenuItem>
                  <MenuItem eventKey="4" onSelect={()=>headingChange(widget , 4)}>Heading 4 </MenuItem>
              </DropdownButton>

              <FormControl
                  className={'my-3'}
                  componentClass="input"
                  type="text"
                  inputRef={(ref) => {this.input = ref}}
                  placeholder="Widget Name" />
              <p className={'my-3'}>Preview</p>
          </div>

        {widget.size===1 && <h1>{widget.text}</h1>}
        {widget.size===2 && <h2>{widget.text}</h2>}
        {widget.size===3 && <h3>{widget.text}</h3>}
        {widget.size===4 && <h4>{widget.text}</h4>}

      </div>

  )
}


export default HeadingWidget
