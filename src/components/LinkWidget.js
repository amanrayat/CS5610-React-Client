import React from 'react'
import {FormControl} from "react-bootstrap";

const LinkWidget = ({widget})=>
    <div>
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Link Text" />
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Link" />
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Widget Name" />
      <a href={widget.href}>{widget.title}</a>
    </div>

export default LinkWidget