import React from 'react';
import {Form,Button,Col} from "react-bootstrap"
import {savePaymentMethod} from "../actions/cartActions"
import CheckoutStep from '../components/shared/CheckoutStep';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "../components/header/header.css"


const PaymentScreen = () => {
    const history = useNavigate();
    const cart = useSelector(state => state.cart)
    const {shippingAddress,} = cart;
    if(!shippingAddress){
        history('/shipping')
    }
    const dispatch = useDispatch()
    const [paymentMethod,setPaymentMethod] = useState(' ')
    
   

    const submitHandler500 = () =>{
        // e.preventDefault();
        console.log(paymentMethod,"from payment screen")
        const sendPay = paymentMethod
        dispatch(savePaymentMethod(sendPay));
        history("/placeorder")
    }

  return (
    <>
    <CheckoutStep step1 step2 step3/>
    <h1 className="paymentMethod" style={{marginTop:"5vh"}}>Payment method</h1><br/>
    <Form className="paymentMethod" onSubmit={submitHandler500}>
        <Form.Group >
            <Form.Label as={"legend"}>
                    select payment method <i style={{color:"green"}} class="fa-regular fa-credit-card"></i>
            </Form.Label><br/>
            <Col><br/>
            <Form.Check type='radio' label="Paypal or credit card" id="paypal" name="paymentMethod" value={"paypal"} onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check><br/>
            <Form.Check type='radio' label="Debit Card (AXIS/HDFC)" id="DebitCard" name="paymentMethod" value={"Debit Card Axis"}  onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check><br/>
            <Form.Check type='radio' label="Paytm" id="paytm" name="paymentMethod" value={"paytm"}  onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check><br/>
            <Form.Check type='radio' label="Cash on Deleivery" id="cashOnDelivery" name="paymentMethod" value={"cash On Delivery"}  onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check><br/>
            </Col>


            <Button type="submit" variant='primary' className={"btn-success"}> continue.. </Button>
        </Form.Group>
        
    </Form>



      
    </>
  )
}

export default PaymentScreen
