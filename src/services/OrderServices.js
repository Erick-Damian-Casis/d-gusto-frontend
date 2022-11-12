import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/v1/private/orders/';

export const getOrders=()=>{
    return axios(API_URL)
        .then(response=>{
            return response.data.data;
        }).catch(error=>{
            console.log(error);
        })
}

export const getOrder=(id)=>{
    return axios(API_URL+id)
        .then(response=>{
            return response.data.data
        }).catch(error=>{
            console.log(error);
        })
}

export const createOrder=(order)=>{
    return axios.post(API_URL, order)
        .then(response=>{
            console.log(response.data)
        }).catch(
            error=>{
                console.log(error)
            });
}

export const destroyOrder =(id)=>{
    return axios.delete(API_URL+id)
        .then(response=>{
            console.log(response.data);
        }).catch(
            error=>{
                console.log(error)
            });
}
