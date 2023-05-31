import  {applyMiddleware, combineReducers} from "redux";
import { bookListReducer, bookDetailsReducer } from "./reducers/bookReducer";
import {createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {cartReducer} from "./reducers/cartReducer";
import {userLoginReducer,userRegisterReducer} from "./reducers/userReducer";
import {orderCreateReducer, orderDetailsReducer, orderListMyReducer} from "./reducers/ordreReducer";


const userInfoFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null;

const cartItemfromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :[];

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress") ? (JSON.parse(localStorage.getItem("shippingAddress"))):([]);

const orderCreateFromLocalStorage = localStorage.getItem("orderCreate") ? (JSON.parse(localStorage.getItem("orderCreate"))):([]);

const reducer = combineReducers({
    bookList : bookListReducer,
    bookDetail : bookDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderListMy:orderListMyReducer,

})

const initialState = {
    // cart:{cartItem :"hello"}
    cart:{cartItems:cartItemfromLocalStorage,
    shippingAddress:shippingAddressFromLocalStorage},
    userLogin:{userInfo:userInfoFromStorage},


}
const middleware = [thunk];

//middleware thunk
// store.subscribe(()=>store.getState())
const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;