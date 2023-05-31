import {CART_ADD_ITEM,CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS} from "../constrants/cartConst"

export const cartReducer = (state = {cartItems:[],shippingAddress:[]}, action) =>{
    switch(action.type){
        case CART_ADD_ITEM :
            const item = action.payload
            // console.log(state,"from cart add item reducer");
            // const existItem = state.cartItems.find(p=> p.book === item.book)

            // if(existItem){
            //     return{
            //         ...state,
            //         cartItems:state.cartItems.map(s=> s.book === existItem.book ? item :s)
            //     }

            // }else{
                return{
                    ...state , cartItems:[...state.cartItems,item]
                }
            // }
            case CART_REMOVE_ITEM:
                // console.log(action.payload,"from cart Reducer....")
                const removeId = action.payload;
                // console.log(state.cartItems)
                const dummyState = state.cartItems;
                localStorage.removeItem("cartItems")

                const removeIndex = state.cartItems.findIndex(e => e.removeId === removeId)
                dummyState.splice( removeIndex, 1 );
                // console.log(state.cartItems,"after deleted form cart Reducer");
                localStorage.setItem("cartItems",JSON.stringify(dummyState))

                return {
                    ...state,
                    cartItems:state?.cartItems,
                        
                    // cartItems:state.cartItems.filter(n=>n.book !== action.payload),
                }

            case CART_SAVE_SHIPPING_ADDRESS:
                console.log(action.payload)
                return{
                    ...state,
                    shippingAddress: action.payload,
                }
            case CART_SAVE_PAYMENT_METHOD:
                return{
                    ...state,
                    paymentMethod:action.payload,
                }

            default:
                return state;
    }
}