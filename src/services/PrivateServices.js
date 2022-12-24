import axios from "axios";
const URL_FOODS = 'http://127.0.0.1:8000/api/v1/private/foods/';
const URL_ORDERS = 'http://127.0.0.1:8000/api/v1/private/orders';


let token = null

export const setToken=(newToken)=>{
    token = `Bearer ${newToken}`
}

/*****************************************************************
***************         FOOD SERVICE           *******************
******************************************************************/

export const getFood =(id)=>{
    const request = axios(`${URL_FOODS + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getFoods =()=>{
    const request = axios(`${URL_FOODS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createFoods =(data)=>{
    const request = axios.post(`${URL_FOODS}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateFood =(id, food)=>{
    const request = axios.put(`${URL_FOODS + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyFood =(id)=>{
    const request =  axios.delete(URL_FOODS+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         ORDERS SERVICE        *******************
 *****************************************************************/

export const getOrders=()=>{
    const request = axios(`${URL_ORDERS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getOrder=(id)=>{
    const request = axios(`${URL_ORDERS+id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createOrder=(order)=>{
    const request = axios.post(URL_ORDERS,order,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyOrder =(id)=>{
    const request = axios.delete(`${URL_ORDERS+id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}


export const logout = ()=>{
    const request = axios(`http://127.0.0.1:8000/api/v1/private/logout`, {
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
