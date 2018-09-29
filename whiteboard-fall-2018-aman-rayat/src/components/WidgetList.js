import React from 'react';

const WidgetList =  ()=>{
    return (
        <div>

            <div className="row">
                <div className="col-9 mt-5">
                    <div className="row container my-5">
                        <div className="col-12">
                <span className="float-right">
                    <button style={{"display": "inline"}} className="btn btn-success">Save</button>
                    <p style={{"display": "inline"}}>Preview</p>
                    <label style={{"display": "inline-block"}} className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"/>
                    </label>
                </span>

                        </div>
                    </div>
                    <div className="widget container my-5">
                        <div className="row container mt-4">
                            <div className="col-7">
                                <h2 style={{"display": "inline"}}>Heading Widget</h2>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                    className="fas fa-arrow-up"/></button>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                    className="fas fa-arrow-down"/></button>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Heading</option>
                                        <option>Link</option>
                                        <option>Image</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="heading text" placeholder="Heading text"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <div className="form-group">
                                    <select className="form-control" id="Heading size">
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                        <option>Heading 3</option>
                                        <option>Heading 4</option>
                                        <option>Heading 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="widgetname" placeholder="Widget Name"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <h2>Preview</h2>
                        </div>
                        <div className="row container mb-4">
                            <h1>Heading Text</h1>
                        </div>
                    </div>
                    <div className="widget container my-5">
                        <div className="row container mt-4">
                            <div className="col-7">
                                <h2 style={{"display": "inline"}}>List Widget</h2>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                    className="fas fa-arrow-up"/></button>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                    className="fas fa-arrow-down"/></button>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <select className="form-control" id="widgetType">
                                        <option>List</option>
                                        <option>Link</option>
                                        <option>Image</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="5" id="comment"
                                placeholder="Put each item in a separate row">
                            </textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <div className="form-group">
                                    <select className="form-control" id="type">
                                        <option>Unordered List</option>
                                        <option>Ordered List</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="widgetname4" placeholder="Widget Name"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <h2>Preview</h2>
                        </div>
                        <div className="row container mb-4">
                            <ul>
                                <li>Put each</li>
                                <li>item in</li>
                                <li>a separate row</li>

                            </ul>
                        </div>
                    </div>
                    <div className="widget container my-5">
                        <div className="row container mt-4">
                            <div className="col-7">
                                <h2 style={{"display": "inline"}}>Paragraph Widget</h2>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                    className="fas fa-arrow-up"/></button>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                    className="fas fa-arrow-down"/></button>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <select className="form-control" id="widgetType1">
                                        <option>Paragraph</option>
                                        <option>Link</option>
                                        <option>Image</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="5" id="paragraph"
                                placeholder="Lorem ipsum">
                            </textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="widgetname1" placeholder="Widget Name"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <h2>Preview</h2>
                        </div>
                        <div className="row container mb-4">
                            <p>Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="widget container my-5">
                        <div className="row container mt-4">
                            <div className="col-7">
                                <h2 style={{"display": "inline"}}>Image Widget</h2>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1">
                                    <i className="fas fa-arrow-up"/></button>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right">
                                    <i className="fas fa-arrow-down"/></button>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <select className="form-control" id="widgetType6">
                                        <option>Image</option>
                                        <option>Link</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="imagelink"
                                               placeholder="http://lorempixel.com/300/150/" type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="widgetname3" placeholder="Widget Name"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <h2>Preview</h2>
                        </div>
                        <div className="row container mb-4">
                            <img src="https://picsum.photos/200/300" alt=""/>
                        </div>
                    </div>
                    <div className="widget container my-5">
                        <div className="row container mt-4">
                            <div className="col-7">
                                <h2 style={{"display":"inline"}}>Link Widget</h2>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                    className="fas fa-arrow-up"/></button>
                                <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                    className="fas fa-arrow-down"/></button>
                            </div>
                            <div className="col-3">
                                <div className="form-group">
                                    <select className="form-control" id="widgetType4">
                                        <option>Link</option>
                                        <option>Image</option>
                                        <option>Paragraph</option>
                                        <option>Heading</option>
                                        <option>List</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Lorem ipsum"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="widgetname2" placeholder="Widget Name"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="linktext" placeholder="Link Text" type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-12">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" id="url" placeholder="Link Text" type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row container">
                            <h2>Preview</h2>
                        </div>
                        <div className="row container mb-4">
                            <a href="#">Link Text</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WidgetList;