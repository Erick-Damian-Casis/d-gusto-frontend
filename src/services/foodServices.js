import axios from "axios";
const API_URL = 'http://127.0.0.1:8000/api/v1/private/foods/';

export const getFoods =()=>{
    return axios(API_URL)
        .then(response=>{
            return response.data.data;
        }).catch(error=>{
            console.log(error)
            });
}

export const createFoods =(data)=>{
    return axios.post(API_URL,data)
        .then(response=>{
            console.log(response.data)
    }).catch(
        error=>{
            console.log(error)
        });
}

export const destroyFood =(id)=>{
    return axios.delete(API_URL+id)
        .then(response=>{
            console.log(response.data);
            }).catch(
            error=>{
                console.log(error)
            });
}
