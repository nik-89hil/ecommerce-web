import { USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constrants/userConstrant";
import axios from "axios"

export const logout = () => dispatch =>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('orderCreate');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('userList');
    localStorage.removeItem('resorderCreate');
    localStorage.removeItem('MyList');
    localStorage.removeItem('paymentMethod');
    
    
    dispatch({
        type:USER_LOGIN_LOGOUT
    })

    
}

export const login = (email,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {headers:{'Content-Type':'application/json'}};
        const {data} = await axios.post("/api/user/login",{email,password},config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem("userInfo",JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.message,
        })
        
    }
}

export const register = (name,email,password) => async(dispatch) =>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})
        const config = {headers:{'Content-Type':'application/json'}};
        const {data} = await axios.post("/api/user",{name,email,password},config)

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data,
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data,
        })

        localStorage.setItem("userInfo",JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.message,
        })
        
    }
}