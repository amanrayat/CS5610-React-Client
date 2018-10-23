import axios from 'axios'

class UserService {

    register(username,password) {
        let user = {
            "id": Math.round(Math.random() * 1000000),
            "userName": username,
            "password": password
        };
        return axios({
            url : 'https://guarded-lake-67462.herokuapp.com/api/register',
            method: 'post',
            data:user,
            withCredentials: true
        })
    }


    login(username , password){
        return axios({
                method: 'post',
                url: "https://guarded-lake-67462.herokuapp.com/api/login",
                data : {"userName": username,
                    "password": password},
                withCredentials: true
            }
        )
    }

    profile(){
        return axios({
            method: 'get',
            url: "https://guarded-lake-67462.herokuapp.com/api/profile",
            withCredentials: true
        })

    }
    logout(){
        return axios({
            method: 'get',
            url: "https://guarded-lake-67462.herokuapp.com/api/logout",
            withCredentials: true
        })
    }

    updateProfile(user){
        return this.profile().then((res)=>{
             return axios({
                method : 'put',
                data : user,
                url: "https://guarded-lake-67462.herokuapp.com/api/user/"+res.data.id,
                withCredentials: true
            })
        })


    }
}

export default UserService