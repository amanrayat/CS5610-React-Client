import React from 'react'
import UserService from "../service/UserService";
import {Link} from 'react-router-dom'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.UserService = new UserService();
        this.state ={
            userName : '',
            currUser : '',
            firstName :'',
            lastName : '',
            phoneNo :'',
            email : ''
        }

    }
    componentDidMount(){
        this.UserService.profile().then((res)=>{
            this.setState({
                currUser : res.data,
                userName : res.data.userName,
                firstName : res.data.firstName,
                lastName : res.data.lastName,
                phoneNo : res.data.phoneNo,
                email : res.data.email
            })
        })
    }
    reRender = ()=>{
        this.UserService.profile().then((res)=>{
            this.setState({
                currUser : res.data,
                userName : res.data.userName,
                firstName : res.data.firstName,
                lastName : res.data.lastName,
                phoneNo : res.data.phoneNo,
                email : res.data.email
            })
        })
    };
    updateProfile = ()=>{
        let profile = {
            userName : this.state.userName,
            firstName :this.state.firstName,
            lastName : this.state.lastName,
            phoneNo :this.state.phoneNo,
            email : this.state.email
        };
        this.UserService.updateProfile(profile).then(()=>{
            this.setState({'updated' :true });
            this.render();
        })
    };
    logout =()=>{
        this.UserService.logout().then((res)=>{
            this.props.history.push('/login')

        })
    };

    handleFirstName = (e)=>{
        this.setState({
            firstName : e.target.value
        })
    };
    handlelastName = (e)=>{
        this.setState({
            lastName : e.target.value
        })
    };
    handlephoneNo = (e)=>{
        this.setState({
            phoneNo : e.target.value
        })
    };
    handleEmail = (e)=>{
        this.setState({
            email : e.target.value
        })
    };
    render(){
        return(
            <div className="container mt-3">
                <h1 style={{display:'inline-block' , 'marginLeft' : '50%'} } className={'text-center'}>Profile</h1>
                <Link to={'/courses'}>
                <button
                    className={'btn btn-primary float-right'}
                    style={{display:'inline-block' ,'marginRight':'10px'} }>
                    Course List
                </button>
                </Link>
                <div className="container mt-4">
                    <div style={this.state.updated ? {'display' : 'block'} : {'display' : 'none'}}
                        className={"alert alert-success"} role="alert">
                        Profile Successfully <strong>Saved !!!</strong>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="usernameInput"
                                   className="col-sm-2 col-form-label col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       readOnly
                                       value={this.state.userName}
                                       className="form-control form-control-sm" id="username"
                                       placeholder="aman"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="usernameInput"
                                   className="col-sm-2 col-form-label col-form-label">First Name</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       onChange={this.handleFirstName}
                                       value={this.state.firstName}
                                       className="form-control form-control-sm" id="firstName"
                                       placeholder="aman"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="usernameInput"
                                   className="col-sm-2 col-form-label col-form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       onChange={this.handlelastName}
                                       value={this.state.lastName}
                                       className="form-control form-control-sm" id="lastName"
                                       placeholder="rayat"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phoneNoNumber"
                                   className="col-sm-2 col-form-label col-form-label">phoneNo</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       onChange={this.handlephoneNo}
                                       value={this.state.phoneNo}
                                       className="form-control form-control-sm" id="phoneNoNumber"
                                       placeholder="8574246016"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailInput" className="col-sm-2 col-form-label col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email"
                                       onChange={this.handleEmail}
                                       value={this.state.email}
                                       className="form-control form-control-sm" id="emailInput"
                                       placeholder="amanrayat32@gmail.com"/>
                            </div>
                        </div>
                        <button type="button"
                                id="updateButton"
                                onClick={()=>{this.updateProfile()}}
                                className="btn btn-success btn-block update">UPDATE
                        </button>
                            <button type="button" id="logoutButton"
                                    onClick={()=>this.logout()}
                                    className="btn btn-danger btn-block delete">LOGOUT
                            </button>
                    </form>
                </div>
            </div>
        )
    }

}