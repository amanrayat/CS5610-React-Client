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
      this.props.init(this.props.widgetsInit , this.props.topic)
    }
    // componentWillReceiveProps(newProps){
    //   newProps.init(newProps.widgetsInit,newProps.topic)
    // }
    render() {
        console.log("the props onside are" , this.props)
        return (
            <ul className='list-group'>
              <div className="col-12 my-5">
                <span className="float-right">
                    <button style={{"display": "inline"}} className="btn btn-success mx-3">Save</button>
                    <p style={{"display": "inline"}}>Preview</p>
                    <label style={{"display": "inline-block"}} className="switch">
                      <input type="checkbox" onChange={()=>this.props.previewClick(this.refs.preview.checked)} ref="preview"/>
                      <span className="slider round"/>
                    </label>
                </span>
              </div>
                {
                    this.props.widgets.map((widget,index) =>
                        <div className={'my-3'}>
                            <li key={widget.id} className="list-group-item">
                                {console.log("the prop here is ", this.props)}
                                <div className={'row'} style={this.props.preview===true?{"display": "none"}:{"display": ""}}>
                                    <div className={'col-6'}>
                                        <h5>{widget.type} Widget</h5>
                                    </div>
                                    <div className={'col-2'}>
                                        <button
                                            style={index===0?{"display": "none"}:{"display": "inline"}}
                                            onClick={()=>this.props.arrowUp(widget)}
                                            className="btn btn-primary float-right mx-1">
                                          <i className="fa fa-arrow-up"/></button>
                                        <button
                                            style={index===this.props.widgets.length-1?{"display": "none"}:{"display": "inline"}}
                                            onClick={()=> this.props.arrowDown(widget)}
                                            className="btn btn-primary float-right">
                                          <i className="fa fa-arrow-down"/></button>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                          <DropdownButton
                                              bsStyle="default"
                                              title={widget.type}
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
                                {widget.type==="HEADING" && <HeadingWidget preview={ this.props.preview} handleChange={this.props.handleChange} headingChange = {this.props.headingChange} widget={widget}/>}
                                {widget.type==="PARAGRAPH" && <ParagraphWidget preview={ this.props.preview} handleChange={this.props.handleChange} widget={widget}/>}
                                {widget.type==="LIST" && widget.order==="ordered" && <ol><ListWidget preview={ this.props.preview} handleChangeList={this.props.handleChangeList} listChange = {this.props.listChange} widget={widget}/></ol>}
                                {widget.type==="LIST" && widget.order==="unordered" && <ul><ListWidget preview={ this.props.preview} handleChangeList={this.props.handleChangeList} listChange = {this.props.listChange} widget={widget}/></ul>}
                                {widget.type==="IMAGE" && <ImageWidget preview={ this.props.preview} handleChangeImage={this.props.handleChangeImage} widget={widget}/>}
                                {widget.type==="LINK" && <LinkWidget preview={ this.props.preview} handleChangeText={this.props.handleChangeText} handleChangeHref={this.props.handleChangeHref} widget={widget}/>}
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