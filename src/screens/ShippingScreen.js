import React from 'react'
import { useState } from 'react'
import {Form,Button } from "react-bootstrap"
import {useSelector, useDispatch} from "react-redux"
import FormCompo from "../components/shared/FormCompo"
import {saveShippingAddress} from "../actions/cartActions"
import {useNavigate} from "react-router-dom";
import CheckoutStep from '../components/shared/CheckoutStep';
import "../components/header/header.css"



const ShippingScreen = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const {shippingAddress} = useSelector(state => state.cart)
    // console.log(shippingAddress)
    // const {shippingAddress} = ;
    const [address,setAddress] = useState(shippingAddress.address);
    const [city,setCity] = useState(shippingAddress.city);
    const [pincode,setPincode] = useState(shippingAddress.pincode);
    const [country,setCountry] = useState(shippingAddress.country);


    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,pincode,country}))
        history("/payment");

    }

  return (
    <>
        <FormCompo className="FormCompoAddress">
            <CheckoutStep step1 step2/>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label><br/>
                    <Form.Control type='text' placeholder='Enter Address' required value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control><br/>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label><br/>
                    <Form.Control type='text' placeholder=' city' value={city} required onChange={(e)=>setCity(e.target.value)}></Form.Control><br/>
                </Form.Group>
                <Form.Group controlId='pincode'>
                    <Form.Label>Pin Code</Form.Label><br/>
                    <Form.Control type='text' placeholder=' pincode' required value={pincode} onChange={(e)=>setPincode(e.target.value)}></Form.Control><br/>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label><br/>
                    <Form.Control type='text' placeholder=' country' required value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control><br/>
                </Form.Group>
                <Button type='submit' variant='primary' className="btn-success">Continue</Button>

            </Form>
        </FormCompo>

      
    </>
  )
}

export default ShippingScreen
