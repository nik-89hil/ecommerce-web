import React from 'react' 
import { useState,useEffect } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Form ,Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from '../components/loaderandother/message';
import Loader from '../components/loaderandother/loader';
import {register} from "../actions/userAction";
import FormCompo from "../components/shared/FormCompo"
import "../components/header/header.css"

const RegisterScreen = () => {
    const [name,setName] = useState(' ');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfimPassword] = useState('');
    //for confim password check
    const [message,setMessage] = useState(' ');
    
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1]:"/";
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const history = useNavigate();

    const {loading,error,userInfo} = userRegister;
    useEffect(()=>{
        if(userInfo){
            history(redirect)
        }
    },[userInfo,history,redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        //dispatch code 
        if(password !== confirmPassword){
            window.alert("Password do not match")
            setMessage("Password do not Match...")
        }else{
            dispatch(register(name,email,password))
        }
        
    }
  return (
   <>
   <div className='DesignRegi'>

    <FormCompo className='registeeee'>
        <h1 style={{color:"yellow"}}>Register</h1>
        {error && <Message variant={"danger"}>{error.message}</Message>}
        {loading &&  <Loader/>}
        {message && <Message variant={'danger'}>{message}</Message>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId = "name">
                <Form.Label  style={{marginBottom:"4vh", color:"white"}}>Name</Form.Label>
                <Form.Control  style={{marginBottom:"4vh"}} type='text' placeholder='Your name'  value={name} onChange={(e)=>setName(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group controlId = "email">
                <Form.Label  style={{marginBottom:"4vh", color:"white"}}>Email Address</Form.Label>
                <Form.Control  style={{marginBottom:"4vh"}} type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group controlId = "password">
                <Form.Label  style={{marginBottom:"4vh", color:"white"}}>Password </Form.Label>
                <Form.Control  style={{marginBottom:"4vh"}} type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <Form.Group controlId = "confirmPassword">
                <Form.Label  style={{marginBottom:"4vh", color:"white"}}>Confirm Password </Form.Label>
                <Form.Control  style={{marginBottom:"4vh"}} type='password' placeholder='Re-enter password' value={confirmPassword} onChange={(e)=>setConfimPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <Button type='submit' style={{backgroundColor:"yellow" , color:"black"}}>Create Account</Button>
            <br /><br />
        </Form>
        <Row>
        
            <Col style={{color:"yellow", fontWeight:900}}>
            Already have an account ?
            <Link to={'/login'} style={{color:"yellow",fontWeight:"900"}}> login</Link>
            </Col>
            {/* redirect ? `login?redirect=${redirect}`: */}
        </Row>


    
    </FormCompo>
    </div>

   </>
      
   
  )
}

export default RegisterScreen
