import React from 'react'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <h1>Profile</h1>
                <div className="container">
                    <div className="alert alert-success" role="alert">
                        Profile Successfully <strong>Saved !!!</strong>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameInput"
                                   className="col-sm-2 col-form-label col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className=" form-control form-control-sm" readOnly id="usernameInput"
                                       placeholder="arayat"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phoneNumber"
                                   className="col-sm-2 col-form-label col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="phoneNumber"
                                       placeholder="8574246016"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailInput" className="col-sm-2 col-form-label col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control form-control-sm" id="emailInput"
                                       placeholder="amanrayat32@gmail.com"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="roleInput" className="col-sm-2 col-form-label col-form-label">Role</label>
                            <div className="col-sm-10">
                                <select className="form-control" id="roleInput">
                                    <option>Admin</option>
                                    <option>Professor</option>
                                    <option>Student</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="datepicker" className="col-sm-2 col-form-label col-form-label">Date of
                                Birth</label>
                            <div className="col-sm-10">
                                <input type="text" id="datepicker" placeholder="Date of Birth"/>
                            </div>
                        </div>

                        <button type="button" id="updateButton" className="btn btn-success btn-block update">UPDATE
                        </button>
                        <a href="../index.html">
                            <button type="button" id="logoutButton" className="btn btn-danger btn-block delete">LOGOUT
                            </button>
                        </a>
                    </form>
                </div>
            </div>
        )
    }

}