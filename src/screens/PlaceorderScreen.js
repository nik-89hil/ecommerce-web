import React from 'react'
import {Button, Row, Col,ListGroup, Image,Card, ListGroupItem} from "react-bootstrap"
import {Link} from "react-router-dom";
import {useDispatch ,useSelector} from "react-redux";
import {createOrder} from "../actions/orderAction"
import Message from "../components/loaderandother/message";
import  CheckoutStep  from "../components/shared/CheckoutStep";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const PlaceorderScreen = () => {
    const history = useNavigate();
    const cart = useSelector(state => state.cart);
    const {cartItems}= useSelector(state => state.cart)
    // console.log(cartItems)
    const dispatch = useDispatch();
    const orderCreate = useSelector(state => state.orderCreate);
    const {order,success,error} = orderCreate;
    // console.log(error)

    // fun for decimal
    const addDecimal = (num) =>{
        return (Math.round(num*100)/100).toFixed(2)
    }

    cart.itemPrice = addDecimal(cart.cartItems.reduce((acc,item)=> acc+item.price * item.qty,0))
    cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0: 50)
    cart.totalPrice = Number(cart.itemPrice) + Number(cart.shippingPrice);
    const id = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):[];
    


    console.log(cart.itemPrice,"from place order Screen.....")
    ///work heereree --------------------
    console.log(id._id,"from placeorderhandler line 41")
    // const userShopping = cart.cartItems
    // console.log(cart.cartItems.id,"from place order Screen")

    const placeOrderHandler = () =>{
        // e.preventDefault()
        


        dispatch(
            createOrder({
                OrderItems:cart.cartItems,
                shippingAddress:cart.shippingAddress,
                paymentMethod:cart.paymentMethod,
                itemPrice:cart.itemPrice,
                shippingPrice:cart.shippingPrice,
                totalPrice:cart.totalPrice,
                User:id._id,
               
            })
        )
    }

    const orderResponse =  JSON.parse(localStorage.getItem("resorderCreate"))

    // console.log(orderResponse.createOrder._id,"from placeorder screen after response line 50......")

   
    useEffect(()=>{
        if(success){
            history(`/order/${orderResponse.createOrder._id}`)
        }
        else{
            alert("load page if something unexpected happen or check you are logged in or not.. ")
        }
        //eslink-disable-next-line
    },[history,success])

  return (
    <>
    <CheckoutStep step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h2>shipping <i style={{color:"green"}} class="fa-solid fa-location-dot"></i></h2>
                    <p><strong>Address:</strong>
                    {cart.shippingAddress.address}<br/>
                    {cart.shippingAddress.city}
                    {cart.shippingAddress.pincode}<br/>
                    {cart.shippingAddress.country}
                    </p>
                </ListGroupItem>
                <ListGroupItem>
                    <h2>payment Method <i style={{color:"green"}} class="fa-regular fa-credit-card"></i></h2>
                    <p><strong>{cart.paymentMethod}</strong></p>
                </ListGroupItem>
                <ListGroupItem>
                    <h2>order items</h2>
                    {
                        cartItems.length === 0? <Message>Your cart is empty !!</Message>:
                        <ListGroup variant="flush">
                            {
                                cartItems.map((item,idx)=>{
                                    return(
                                        <ListGroupItem md={8} key={idx}>
                                            <Row>
                                            <Col md={3}>
                                                <Image style={{width:"3vw",height:"6vh"}} src={item.image}/>
                                            </Col>
                                            <Col md={2}>
                                            <Link to={`/books/${item.book}`}>{item.title}</Link>
                                            </Col>
                                            <Col md={4}>
                                            Quantity : {item.qty}  Price per Book : ${item.price} = {(item.qty)*(item.price)}
                                            </Col>
                                            <Col md={2}><i style={{color:"green"}} class="fa-solid fa-circle-check"></i></Col>
                                            </Row>
                                        </ListGroupItem>
                                        

                                    )
                                })

                            }
                            
                        </ListGroup>
                    }
                    
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroupItem>
                    <h2>order summary</h2>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>Subtotal</Col>
                            <Col>${cart.itemPrice}</Col>
                        </Row>
                        <Row>
                            <Col>Shipping</Col>
                            <Col>${cart.shippingPrice}</Col>
                        </Row>
                        <Row>
                            <Col>Total</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        {error && <Message variant="danger">{error} please login first</Message>}

                    </ListGroupItem>
                    

                    <Button type='button' className='btn-block btn-success' disabled={cart.cartItems===0} onClick={placeOrderHandler}>Place order</Button>
                    


                </ListGroup>
            </Card>
        </Col>
    </Row>

      
    </>
  )
}

export default PlaceorderScreen
