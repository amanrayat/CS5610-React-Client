import React , {Component} from 'react';
import UserService from "../service/UserService";
import {Link} from "react-router-dom";


export default class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
        this.UserService = new UserService();
    }

    registerUser = ()=>{
        this.UserService.register(this.state.username , this.state.password).then((res)=>{
            this.props.history.push('/profile')
        })
    };


    render(){
        return(
            <div className="container">
                <h1 className="m-5 text-center">Sign Up</h1>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="usernameFld" onChange={(e)=>this.setState({username : e.target.value})}
                                       placeholder="Choose the username"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="passwordFld" onChange={(e)=>this.setState({password : e.target.value})}
                                       placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="verifyPasswordFld" className="col-sm-2 col-form-label">Re-Enter
                                Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="verifyPasswordFld"
                                       placeholder="Re Enter Password" onChange={(e)=>this.setState({rePassword : e.target.value})}/>
                                <p style={this.state.rePassword === this.state.password ? {display : "none"} :  {color : 'red'}}>The passwords does not match</p>
                            </div>
                        </div>
                        <button type="button"
                                className={this.state.rePassword === this.state.password ? "btn btn-primary btn-block" : "btn btn-primary btn-block disabled"}
                                onClick={()=>this.registerUser()}>
                            Sign Up
                        </button>
                        <div className="text-center">
                            <Link to={'/login'}>
                            <button type="button"  className="btn btn-inverted text-center">
                                Login
                            </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}