import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserService from '../service/UserService'

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            wrong : false
        }
        this.UserService = new UserService();

    }
    login = ()=>{
        this.UserService.login(this.state.username , this.state.password).then((res)=>{
            console.log("the res is " , res)
            if (res.status === 200 && res.data){
                this.props.history.push('/profile')
            }
            else{
                this.setState({wrong : true})
                }
        })
    };
    render(){
        return(
            <div className="container mt-5">
                <h1 className="m-5 text-center">Sign In</h1>
                <div style={this.state.wrong ? {'display' : 'block'} : {'display' : 'none'}}
                     className={"alert alert-danger"} role="alert">
                    Wrong Credentials <strong>Try Again !!!</strong>
                </div>
                <div className="container">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="usernameFld"
                                       placeholder="Enter the username"
                                       onChange={(e)=>this.setState({username : e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="passwordFld" placeholder="Password"
                                       onChange={(e)=>this.setState({password : e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary text-center btn-block"
                                    onClick={()=>this.login()}>
                                Login</button>
                            <button className="btn btn-default text-center">Forgot Password ?</button>
                            <Link to={'/register'}>
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

