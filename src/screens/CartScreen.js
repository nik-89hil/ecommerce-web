import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Row, Col,  Button, Card, ListGroupItem, ListGroup, Image } from "react-bootstrap"
import { addtoCart, removeFromCart1 } from "../actions/cartActions"
import {useNavigate, useParams, useLocation } from 'react-router-dom'
import Message from '../components/loaderandother/message'
import { Link } from 'react-router-dom'

import "../components/header/header.css"

const CartScreen = () => {
    const params = useParams();
    const location = useLocation();
    const { id } = params;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const history = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (id) {
            dispatch(addtoCart(id, qty))
        }

    }, [dispatch, qty, id])
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    // const history = useNavigate();


    const removeFromCart = () => {
        
        // console.log(cartItem);
        // console.log(id,"from remove cart function")

        dispatch(removeFromCart1(id))

    }

    const checkOut =() =>{
        history(`/shipping`);
    }


    return (
        <>

            <Row>
                <Col md={0}>
                    <h1 className='cartHeading'>Your cart is Here ...</h1>
                    {
                        cartItems.length === 0 ? (
                            <Message>Your cart is Empty !! <Link to={"/home"}>go to home</Link></Message>
                        ) : (
                            <ListGroup variant="flush">
                                {
                                    cartItems.map((item,idx) => (
                                        <ListGroupItem key={idx}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={item.image} alt={item.title} fluid rounded />
                                                </Col>
                                                <Col md={3}>
                                                    Book Name : {item.title}
                                                </Col>
                                                <Col md={2}>
                                                    <h6>Price</h6>
                                                    ${item.price}
                                                </Col>
                                                {/* <Col md={2}>
                                                    <Form.Control as="select" value={item.qty} onChange={(e) => dispatch(
                                                    addtoCart(item.book , Number(e.target.value)
                                                    ))}>
                                                        {
                                                            [1,2,3,4,5,6].map((s) => (
                                                                <option key={s} value={s}>{s}</option>
                                                            ))
                                                        }

                                                    </Form.Control>
                                                    
                                                </Col> */}
                                                <Col>
                                                    <h6>Quantity</h6>
                                                    {item.qty}
                                                </Col>
                                                <Col>
                                                    <Button type="button" variant='light' onClick={() => removeFromCart(item.book)} >cancel</Button>

                                                </Col>


                                            </Row>

                                            <Row style={{ marginLeft: "40vw" }}>
                                                quantity  : {item.qty} , Price : {item.price}, subtotal: ${(item.qty) * (item.price)}
                                            </Row>
                                        </ListGroupItem>

                                    ))
                                }
                            </ListGroup>
                        )

                    }

                </Col>
                <Col md={4}>
                    <Card className='cardforCartTotal'>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                            <h2>total ({cartItems.reduce((acc, item) => acc + item.qty,0)}) items</h2>

                            Total Amount : <p style={{color:"green",fontWeight:"700",fontSize:"20px"}}>${cartItems.reduce((acc,item) => acc + item.qty * item.price,0).toFixed(2)}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button type="button" className='btn-block btn-success' disabled={
                                    cartItems.length === 0
                                } onClick={checkOut}><i class="fa-solid fa-cart-shopping"></i>  Proceed to check out</Button>
                            </ListGroupItem>
                            
                            
                        </ListGroup>
                    </Card>
                </Col>
            </Row>


        </>
    )
}

export default CartScreen






