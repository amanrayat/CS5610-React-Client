import React , {Component} from 'react';

export default class Register extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="container">
                <h1 className="m-5 text-center">Sign Up</h1>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="usernameFld"
                                       placeholder="Choose the username"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="passwordFld" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">Re-Enter
                                Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="verifyPasswordFld"
                                       placeholder="Password"/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Sign Up</button>
                        <div className="text-center">
                            <button type="button" className="btn btn-inverted text-center"><a
                                href="../login/login.template.client.html"/>Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}