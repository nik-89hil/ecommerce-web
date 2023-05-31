import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
// import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import BookScreen from '../screens/BookScreen'

const Horror = () => {

    const [book,setBook] = useState([]);
    useEffect(()=>{
        const fetchBook = async() =>{
            const {data} = await axios.get(`/api/horror`);
            setBook(data)
        }
        fetchBook();
    },)
    
  return (
    <>
    <h1><i style={{color:"green",fontSize:"25px"}} class="fa-solid fa-chevron-right"></i> Horror Books :</h1>
    <Row>
        {
            book.map((book,idx) => {
                return(
                    <Col key={idx} md="3">
                    <BookScreen book={book}/>
                    </Col>
                )
               
            })

        }
    </Row>
    </>
  )
}

export default Horror
