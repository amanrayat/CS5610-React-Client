import React, {Component} from 'react';
export default class Login extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container mt-5">
                <h1 className="m-5 text-center">Sign In</h1>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="usernameFld"
                                       placeholder="Enter the username"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="passwordFld" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="../profile/profile.template.client.html">
                                <button type="button" className="btn btn-primary text-center btn-block">Login</button>
                            </a>
                            <button className="btn btn-default text-center">Forgot Password ?</button>
                            <a href="../register/register.template.client.html">Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

