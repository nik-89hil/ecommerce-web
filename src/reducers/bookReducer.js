
import {BOOK_LIST_FAILS,BOOK_LIST_SUCCESS,BOOK_LIST_REQUEST,
    BOOK_DETAILS_REQUEST,BOOK_DETAILS_SUCCESS,BOOK_DETAILS_FAILS
 } from  "../constrants/bookConstrant"




export const bookListReducer = (state = {books:[]},action) => {

    switch(action.type){
        case BOOK_LIST_REQUEST:
            return {loading:true , books:[]}
        case BOOK_LIST_SUCCESS:
            return {
                loading:false,
                books:action.payload 
            }
        case BOOK_LIST_FAILS:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }

}

export const bookDetailsReducer = (state = {book:{}},action) => {

    switch(action.type){
        case BOOK_DETAILS_REQUEST:
            return {loading:true , book:{}}
        case BOOK_DETAILS_SUCCESS:
            return {
                loading:false,
                book:action.payload 
            }
        case BOOK_DETAILS_FAILS:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }

}


