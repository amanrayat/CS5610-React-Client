import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";
import {DropdownButton, MenuItem} from "react-bootstrap";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit , props.topic)
    }

    componentDidUpdate(){
      console.log("component will update ")

      this.props.init(this.props.widgetsInit , this.props.topic)
    }
    componentWillReceiveProps(newProps){
      console.log("component will receive props")
      newProps.init(newProps.widgetsInit,newProps.topic)
    }
    render() {
        console.log("the props are " , this.props)
        return (
            <ul className='list-group'>
              <div className="col-12 my-5">
                <span className="float-right">
                    <button style={{"display": "inline"}} className="btn btn-success mx-3">Save</button>
                    <p style={{"display": "inline"}}>Preview</p>
                    <label style={{"display": "inline-block"}} className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"/>
                    </label>
                </span>
              </div>
                {
                    this.props.widgets.map((widget) =>
                        <div className={'my-3'}>
                            <li key={widget.id} className="list-group-item">
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <h5>{widget.type} Widget</h5>
                                    </div>
                                    <div className={'col-2'}>
                                        <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                            className="fa fa-arrow-up"/></button>
                                        <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                            className="fa fa-arrow-down"/></button>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                          <DropdownButton
                                              bsStyle="default"
                                              title={widget.type}
                                              key={1}
                                              noCaret
                                              id={`dropdown-basic-${1}`}>
                                            <MenuItem eventKey="1" onSelect={()=>this.props.changeType(widget,1)}>Heading</MenuItem>
                                            <MenuItem eventKey="2" onSelect={()=>this.props.changeType(widget,2)}>Paragraph</MenuItem>
                                            <MenuItem eventKey="3" onSelect={()=>this.props.changeType(widget,3)}>List</MenuItem>
                                            <MenuItem eventKey="4" onSelect={()=>this.props.changeType(widget,4)}>Image</MenuItem>
                                            <MenuItem eventKey="5" onSelect={()=>this.props.changeType(widget,5)}>Link</MenuItem>
                                          </DropdownButton>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-danger" onClick={()=>this.props.deleteWidget(widget)}>
                                          <i className="fa fa-times" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                                {console.log("the type is " , widget.type)}
                                {widget.type==="HEADING" && <HeadingWidget widget={widget}/>}
                                {widget.type==="PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                                {widget.type==="LIST" && <ListWidget widget={widget}/>}
                                {widget.type==="IMAGE" && <ImageWidget widget={widget}/>}
                                {widget.type==="LINK" && <LinkWidget widget={widget}/>}
                            </li>
                        </div>

                    )
                }
              <button className={'btn float-right my-5 btn-primary'} onClick={()=>this.props.addWidget()}>
                <i className="fa fa-plus-circle fa-2x" aria-hidden="true"/>
              </button>
            </ul>


        )
    }
}

export default WidgetListComponent