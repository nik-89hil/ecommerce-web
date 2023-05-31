import {ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAIL} from "../constrants/orderConstrant";

export const orderCreateReducer = (state=[],action)=>{
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return{
                loading:true,
            }
        case ORDER_CREATE_SUCCESS:
            // console.log(action.payload,"from order Reducer")
            const payload = action.payload
            return{
                loading:false,
                success:true,
                order:payload,
            }
            
        case ORDER_CREATE_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        default:
            return state;    
    }

}




export const orderDetailsReducer = (state={orderItems:[], loading :true ,shippingAddress:{}},action)=>{
    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case ORDER_DETAILS_SUCCESS:
            // console.log(action.payload,"from order Reducer")
            const payload = action.payload
            return{
                loading:false,
                order:payload,
            }
            
        case ORDER_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        default:
            return state;    
    }

}



export const orderListMyReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case ORDER_LIST_MY_REQUEST:
            return{
                // ...state,
                loading:true,
            }
        case ORDER_LIST_MY_SUCCESS:
            // console.log(action.payload,"from order Reducer")
            const payload = action.payload
            return{
                loading:false,
                orders:action.payload,
            }
            
        case ORDER_LIST_MY_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
        default:
            return state;    
    }

}
