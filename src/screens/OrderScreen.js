import React from 'react'
import { Button, Row, Col, ListGroup, Image, Card, ListGroupItem } from "react-bootstrap"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../actions/orderAction"
import Message from "../components/loaderandother/message";
import Loader from "../components/loaderandother/loader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import "../components/header/header.css"


const OrderScreen = () => {
    const params = useParams();
    const orderId = params.id;
    const dispatch = useDispatch();
    const orderDetails = useSelector(state => state.orderDetails);
    const { order, loading, error } = orderDetails;
    // localStorage.setItem("userList" ,JSON.stringify(order))

    useEffect(() => {
        dispatch(getOrderDetails(orderId));

    }, [dispatch, orderId])

    // localStorage.setItem("userList",JSON.stringify(orderDetails.order[0].OrderItems))

    // console.log(orderDetails.order,"-------------------")
    return loading ? <Loader /> :
        error ? <Message variant={"danger"}>{error}</Message> :
            <>
                <h2 className='ordercarHeading' >Order Details <span>#{order[0]._id}</span>&nbsp;<i style={{color:"yellow",fontSize:"29px"}} class="fa-solid fa-file"></i></h2>
                <Row className='orderCard'>
                    <Col md={5} style={{margin:"auto"}}>
                        <ListGroup.Item variant='flush'>
                            <h2 className='abcheading'>shipping</h2>
                            <p>Name : {order[0].User.name}</p>
                            <p>Email : {order[0].User.email}</p>
                            <p>Address -</p>
                            <p>
                                {order[0].shippingAddress.address}<br />
                                {order[0].shippingAddress.city}
                                {order[0].shippingAddress.pincode}<br />
                                {order[0].shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <h2 className='abcheading'>Ordered items:</h2>
                            {
                            
                                order[0].OrderItems.map((item,idx)=>{
                                    return(
                                        <li key={idx}>Book Name : {item.title} , Quantity : {item.qty} , Price : {item.price}</li>
                                    )
                                })
                            }
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2 className='abcheading'>Payment Status :</h2>
                            <ul>
                            <li>
                                {
                                order[0].isPaid? "You Paid Total Amout" : "Not Paid any amount right now..."
                               }

                            </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2 className='abcheading'>Delivery Status :</h2>
                            <ul>
                            <li>
                                {
                                order[0].isDelevired? "Your Books are Deliverd" : "Your Books are in Packaging Stage..."
                               }

                            </li>
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2 className='abcheading'>Total Amount :</h2>
                            <p style={{color:"black",fontWeight:"700"}}>${order[0].totalPrice}</p>
                        </ListGroupItem>
                        <Link to={"/home"}>go to Home</Link>
                        
                        
                        
                    </Col>
                </Row>
            </>
}

export default OrderScreen
