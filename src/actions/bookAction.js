
import axios from 'axios'
import {BOOK_LIST_REQUEST,BOOK_LIST_SUCCESS,BOOK_LIST_FAILS ,
    BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS , BOOK_DETAILS_FAILS
} from  "../constrants/bookConstrant"


export const listBooks = () =>  async(dispatch) => {
    try {
        dispatch({type: BOOK_LIST_REQUEST})
        const {data} = await axios.get('https://api-ecommerce-n908.onrender.com/api/books')
        dispatch({
            type:BOOK_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({type:BOOK_LIST_FAILS,
            payload:error.message
        })
        
    }

}




export const listBookDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: BOOK_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/books/${id}`)
        dispatch({
            type:BOOK_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({type:BOOK_DETAILS_FAILS,
            payload:error.message
        })
        
    }
} 




export const searchthis = (search) => async(dispatch) => {
    try {
        console.log(search)
        // dispatch({type: BOOK_DETAILS_REQUEST})
        const {data} = await axios.post(`/home/${search}`)
        // dispatch({
        //     type:BOOK_DETAILS_SUCCESS,
        //     payload:data
        // })
    } catch (error) {
        dispatch({type:BOOK_DETAILS_FAILS,
            payload:error.message
        })
        
    }
} 


