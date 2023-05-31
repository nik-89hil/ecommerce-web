import React from 'react'
// import books from '../book'
import { Button, Col, Image, ListGroup, ListGroupItem, Row ,Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect,} from 'react'
// import axios from 'axios'
import {useDispatch,useSelector} from "react-redux";
import {listBookDetails}  from "../actions/bookAction";
import Loader from '../components/loaderandother/loader';
import Message from "../components/loaderandother/message";



const BookDetails = () => {
    const [qty,setQuantity] = useState(1);
    const history = useNavigate()
    const params = useParams();
    const {id} = params;
    const dispatch = useDispatch();
    const bookDetail = useSelector(state => state.bookDetail);
    const {loading,error,book} = bookDetail
    useEffect(()=>{

        dispatch(listBookDetails(id))
    },[dispatch])
    
    // const foo = books.find((b) => b.pages == id)

    //functions

    const addToCartHandler = () =>{
       history(`/cart/${id}?qty=${qty}`)

    }

  return (
    <>

    {
         loading ? ( <Loader/>) : error? (<Message variant="danger">{error} </Message>) :<Row style={{marginBottom:"15vh"}}>
         <Col md={6} style={{marginTop:"12vh"}}>
             <Image style={{width:"320px",height:"400px",marginLeft:"3vw"}} src={book.imageLink} alt={book.title}/>
         </Col>
 
         <Col md={5} style={{marginTop:"12vh"}}>
             <ListGroup variant="flush">
                 <ListGroupItem>
                     <Link to="/home" className='SpecialFontAwesome btn btn-light'>
                     <i style={{color:"green"}} class="fa-solid fa-chevron-left"></i>
                         &nbsp;Go to Back</Link>
                     <h1 style={{color:"green"}}>{book.title}</h1> 
                 </ListGroupItem>
                 <ListGroupItem>
                     <h5>Author : {book.author}</h5>
                     <h6>Country : {book.country}</h6>
                 </ListGroupItem>
                 <ListGroupItem>
                     <h6>Language : {book.language}</h6>
                     <h6>pages : {book.pages}</h6>
                     <h6>publish : {book.year} Year</h6>
                 </ListGroupItem>
                 <ListGroupItem>
                     <h2>Price : ${book.pages}</h2>
                     <Col md={1} style={{marginBottom:"3vh"}}>Status:</Col>
        <Col>{book.countInStock >0 ? "In stock" : "Out of stock"}</Col>
        {
            book.countInStock > 0 && (
                <ListGroupItem>
                    <Row>
                        <Col > Select Quantity </Col>
                        <Form.Control as="select" value={qty} onChange={(e) => setQuantity(e.target.value)}>
                            {
                                [...Array(book.countInStock).keys()].map((s)=>(
                                    <option key ={s +1} value={s+1}>{s+1}</option>
                                ))
                            }

                        </Form.Control>
                    </Row>
                </ListGroupItem>
            )
        }

            <Col style={{marginTop:"7vh"}}><Button className='btn-block btn-success' type='button' onClick={addToCartHandler} onChange={(e) =>e.target.value}>Add to cart</Button></Col>
                     
                 </ListGroupItem>
             </ListGroup>
         </Col>
         <ListGroup style={{margin:"auto",marginTop:"10vh",padding:"15px",border:"2px solid yellow"}}>
            <ListGroupItem>
                <h1 style={{color:"green"}}>Description:</h1><br/>
                <p style={{backgroundColor:"yellow",fontWeight:"700", width:"15vw",textAlign:"center",borderRadius:"10px"}}>{book.category}</p>
            <p style={{fontFamily:"cursive"}}><i style={{color:"green",fontSize:"20px"}} class="fa-solid fa-circle-info"></i> {book.description}</p><br/>
            </ListGroupItem>
         </ListGroup>
         
     </Row>
    }
   
    


      
    </>
  )
}

export default  BookDetails
