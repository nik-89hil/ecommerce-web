import axios from 'axios';

import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAIL} from "../constrants/orderConstrant"

export const createOrder = (order) =>async(dispatch,getState)=>{
    try{
        console.log(order,"from order action")
        dispatch({
            type:ORDER_CREATE_REQUEST
        })
        // const {userLogin:{userInfo},} = getState();
        const userLogin = (localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")):[];
        // console.log(, "from order Action user")
        
        console.log(order,"from order action line 15......")
        const config ={
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userLogin.token}`
            },
        };
        // const user ={User:userLogin._id}
        // console.log(order,config)


        const {data} = await axios.post("/api/order",order,config);
        localStorage.setItem("resorderCreate",JSON.stringify(data))
        // console.log(data,"from order Action LIne no. 28...")
        
        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data,
        })
    }catch(error){
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload:error.message,
        })   

    }

}

//taking order details -----------------------------------------------

export const getOrderDetails = (id) =>async(dispatch,getState)=>{
    try{
        // console.log(order,"from order action")
        dispatch({
            type:ORDER_DETAILS_REQUEST
        })
        // const {userLogin:{userInfo},} = getState();
        const userLogin = (localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")):[];
        // console.log(, "from order Action user")
        
        // console.log(order,"from order action line 15......")
        const config ={
            headers:{
                Authorization:`Bearer ${userLogin.token}`
            },
        };
        // const user ={User:userLogin._id}
        // console.log(order,config)


        const {data} = await axios.get(`/api/order/${id}`,config);
        localStorage.setItem("resorderCreate",JSON.stringify(data))
        console.log(data[0].OrderItems,"from order Action LIne no. 28...")
        localStorage.setItem("MyList", JSON.stringify(data[0].OrderItems))
        
        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data,
        })
    }catch(error){
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload:error.message,
        })   

    }

}

//for user order details exist-----------------------------------------

export const listMyOrders = () =>async(dispatch,getState)=>{
    try{
        // console.log(order,"from order action")
        dispatch({
            type:ORDER_LIST_MY_REQUEST
        })
        // const {userLogin:{userInfo},} = getState();
        const userLogin = (localStorage.getItem("userInfo"))?JSON.parse(localStorage.getItem("userInfo")):[];
        // console.log(, "from order Action user")
        
        // console.log(order,"from order action line 15......")
        const config ={
            headers:{
                Authorization:`Bearer ${userLogin.token}`
            },
        };
        // const user ={User:userLogin._id}
        // console.log(order,config)


        const {data} = await axios.get(`/api/order/myorders`,config);
        // localStorage.setItem("resorderCreate",JSON.stringify(data))
        // console.log(data,"from order Action LIne no. 28...")
        
        dispatch({
            type:ORDER_LIST_MY_SUCCESS,
            payload:data,
        })
    }catch(error){
        dispatch({
            type:ORDER_LIST_MY_FAIL,
            payload:error.message,
        })   

    }

}




