import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import books from '../book'
import BookScreen from './BookScreen';
import {useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {listBooks} from '../actions/bookAction'
import Loader from '../components/loaderandother/loader';
import Message from "../components/loaderandother/message";


const HomeScreen = () => { 
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.bookList);
  const{loading , error , books} = bookList

  useEffect(()=>{
    dispatch(listBooks())

  },[dispatch]);

  // const books = [];
  
  return (
    <>


    {
      loading ? ( <Loader/>) : error? (<Message variant="danger">{error} </Message>) :
      <Row>
      {
          books.map((book,idx) => {
              return(
                  <Col key={idx} md="3">
                  <BookScreen book={book}/>
                  </Col>
              )
          })
      }
    </Row>
    }

    
    

   
      
    </>
  )
}

export default HomeScreen
