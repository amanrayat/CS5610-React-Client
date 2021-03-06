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

    componentDidMount(){
        this.props.init(this.props.widgetsInit , this.props.topic)
    }

    componentWillReceiveProps(newProps){
        if(this.props.topic.id!==newProps.topic.id ){
            this.props.init(newProps.widgetsInit , newProps.topic)
        }

    }
    render() {
        return (
            <ul className='list-group'>
                <div className="col-12 my-5">
                <span className="float-right">
                    <button style={{"display": "inline"}} onClick={()=>this.props.handleSave(this.props.topic , this.props.widgets)}
                            className="btn btn-success mx-3">Save</button>
                    <p style={{"display": "inline"}}>Preview</p>
                    <label style={{"display": "inline-block"}} className="switch">
                      <input type="checkbox"
                             onChange={()=>this.props.previewClick(this.refs.preview.checked)} ref="preview"/>
                      <span className="slider round"/>
                    </label>
                </span>
                </div>
                {
                    this.props.widgets &&
                    this.props.widgets.map((widget,index) =>
                        <div key={widget.id} className={'my-3'}>
                            <li className={this.props.preview?
                                "list-group":"list-group-item"}>
                                <div className={'row'} style={this.props.preview?
                                    {"display": "none"}:{"display": ""}}>
                                    <div className={'col-6'}>
                                        <h5>{widget.widgetType} Widget</h5>
                                    </div>
                                    <div className={'col-2'}>
                                        <button
                                            style={index===0?{"display": "none"}:{"display": "inline"}}
                                            onClick={()=>this.props.arrowUp(widget)}
                                            className="btn btn-primary float-right mx-1">
                                            <i className="fa fa-arrow-up"/></button>
                                        <button
                                            style={index===this.props.widgets.length-1?
                                                {"display": "none"}:{"display": "inline"}}
                                            onClick={()=> this.props.arrowDown(widget)}
                                            className="btn btn-primary float-right">
                                            <i className="fa fa-arrow-down"/></button>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <DropdownButton
                                                bsStyle="default"
                                                title={widget.widgetType}
                                                noCaret
                                                id={`dropdown-basic-${1}`}>
                                                <MenuItem eventKey="1"
                                                          onSelect={()=>this.props.changeType(widget,1)}>Heading
                                                </MenuItem>
                                                <MenuItem eventKey="2"
                                                          onSelect={()=>this.props.changeType(widget,2)}>Paragraph
                                                </MenuItem>
                                                <MenuItem eventKey="3"
                                                          onSelect={()=>this.props.changeType(widget,3)}>List
                                                </MenuItem>
                                                <MenuItem eventKey="4"
                                                          onSelect={()=>this.props.changeType(widget,4)}>Image
                                                </MenuItem>
                                                <MenuItem eventKey="5"
                                                          onSelect={()=>this.props.changeType(widget,5)}>Link
                                                </MenuItem>
                                            </DropdownButton>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-danger"
                                                onClick={()=>this.props.deleteWidget(widget , this.props.topic)}>
                                            <i className="fa fa-times" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                                {widget.widgetType==="HEADING" && <HeadingWidget
                                    preview={ this.props.preview}
                                    handleChange={this.props.handleChange}
                                    headingChange = {this.props.headingChange}
                                    widget={widget}/>}
                                {widget.widgetType==="PARAGRAPH" && <ParagraphWidget
                                    preview={ this.props.preview}
                                    handleChange={this.props.handleChange}
                                    widget={widget}/>}
                                {widget.widgetType==="LIST" && widget.order==="ordered" && <ol><ListWidget
                                    preview={ this.props.preview}
                                    handleChangeList={this.props.handleChangeList}
                                    listChange = {this.props.listChange}
                                    widget={widget}/></ol>}
                                {widget.widgetType==="LIST" && widget.order!=="ordered" &&  <ul><ListWidget
                                    preview={ this.props.preview}
                                    handleChangeList={this.props.handleChangeList}
                                    listChange = {this.props.listChange}
                                    widget={widget}/></ul>}
                                {widget.widgetType==="IMAGE" && <ImageWidget
                                    preview={ this.props.preview}
                                    handleChangeImage={this.props.handleChangeImage}
                                    widget={widget}/>}
                                {widget.widgetType==="LINK" && <LinkWidget
                                    preview={ this.props.preview}
                                    handleChangeText={this.props.handleChangeText}
                                    handleChangeHref={this.props.handleChangeHref}
                                    widget={widget}/>}
                            </li>
                        </div>

                    )
                }
                <button
                    style={this.props.preview?{"display": "none"}:{"display": "inline"}}
                    className={'btn float-right my-5 btn-primary'}
                    onClick={()=>this.props.addWidget(this.props.topic)}>
                    <i className="fa fa-plus-circle fa-2x" aria-hidden="true"/>
                </button>
            </ul>
        )
    }
}

export default WidgetListComponent