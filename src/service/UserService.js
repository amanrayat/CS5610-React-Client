import axios from 'axios'

class UserService {
    register(username,password){
            console.log("the username and password sre" , username , password)
        axios.post("http://localhost:8080/api/register" ,  {
            userName : username,
            password : password
        }).then((res)=>{
            console.log("the response is " , res)
        })
    }
    profile(){
        axios.get("http://localhost:8080/api/course").then((res)=>console.log(res))
    }
}

export default UserService