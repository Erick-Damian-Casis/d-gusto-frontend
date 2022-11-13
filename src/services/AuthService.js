import axios from "axios";

const URL_API='http://127.0.0.1:8000/api/v1/public/';

export const login=(data)=>{
    return axios.post(URL_API+'login', data)
        .then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
}

export const createRegister=(data)=>{
    return axios.post(URL_API+'register', data)
        .then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
}
