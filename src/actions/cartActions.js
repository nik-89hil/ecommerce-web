import axios from  "axios";



import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constrants/cartConst";


export const addtoCart = (id,qty) => async(dispatch,getState)=>{
    const {data} = await axios.get(`/api/books/${id}`);
   
    const payload ={
        book:data._id,
        title:data.title,
        image:data.imageLink,
        price:data.price,
        countInStock:data.countInStock,
        qty,

    }
    // console.log(payload,"from add to cart ACtion");
    
    dispatch({
        type:CART_ADD_ITEM,
        payload:payload,
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    
}

export const removeFromCart1 =(id)=>(dispatch,getState) =>{
    // console.log(id , "from cart action removecart 1")
    const idget = id
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:{
            book: idget
        }
    })

    
    //get the items from local storage
    //find the item matching with id 
    //delete that item 
    // set the remaining item into the local storage
    // localStorage.setItem("cartItems",JSON.stringify(this.state?.cart.cartItems))
    


}


export const saveShippingAddress = (data) => dispatch =>{
    // console.log({data},"from cart action shipping address")
     const payload={
        address:data.address,
        city:data.city,
        country:data.country,
        pincode:data.pincode
    }
    console.log(payload);
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:payload,
    })

    localStorage.setItem("shippingAddress",JSON.stringify(payload));
}

export const savePaymentMethod = (data)=> (dispatch) =>{
    const payload = data;
    console.log(payload,"from cart action here ...........line 72");
    
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:payload,
    })

    localStorage.setItem("paymentMethod",data);

}