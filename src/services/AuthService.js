import axios from "axios";

const API_URL= 'http://127.0.0.1:8000/api/v1/public'

export const login = (data)=>{
    const request = axios.post(`${API_URL}/login`, data)
    return request.then(response=>response.data)
}
export const registerUser = (data)=>{
    const request = axios.post(`${API_URL}/register`, data)
    return request.then(response=>response.data)
}


