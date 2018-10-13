import  React from 'react'
import {FormControl} from "react-bootstrap";

const ImageWidget = ({widget})=>
    <div>
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Image src" />
      <FormControl
          className={'my-3'}
          componentClass="input"
          type="text"
          inputRef={(ref) => {this.input = ref}}
          placeholder="Widget Name" />
      <img src={widget.src} alt="abc"/>
    </div>

export default ImageWidget
