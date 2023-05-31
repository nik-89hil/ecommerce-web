import React from 'react' 
import { useState,useEffect } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Form ,Button, Row, Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from '../components/loaderandother/message';
import Loader from '../components/loaderandother/loader';
import {login} from "../actions/userAction";
import FormCompo from "../components/shared/FormCompo"
import "../components/header/header.css"

const LoginScreen = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1]:"/";
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const history = useNavigate();

    const {loading,error,userInfo} = userLogin;
    useEffect(()=>{
        if(userInfo){
            history(redirect)
            
        }
    },[userInfo,history,redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        //dispatch code 
        dispatch(login(email,password))
    }
  return (
   <div  className="forLogin">
    <FormCompo>
        <h1 style={{color:"green",fontFamily:"sans-serif"}}>Signin | Login</h1>
        {error && <Message variant={"danger"}>{error}</Message>}
        {loading &&  <Loader/>}
        <Form onSubmit={submitHandler}>
            <Form.Group controlId = "email">
                <Form.Label style={{marginBottom:"5vh"}}>Email Address</Form.Label>
                <Form.Control type='email' placeholder='enter email' style={{marginBottom:"5vh"}} value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>

                <Form.Label style={{marginBottom:"5vh"}}>Password </Form.Label>
                <Form.Control style={{marginBottom:"5vh"}} type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>

            </Form.Group>
            <Button type='submit'className='btn-success' style={{marginBottom:"1vh"}} varient="primary">Singn in</Button>
        
        </Form>
        <Row>
            <Col>
            New user | Create your Account
            <Link to={'/register'} style={{color:"green"}}> Register</Link>
            </Col>
        </Row>

        {/* redirect ? `register?redirect=${redirect}`: */}

    
    </FormCompo>
   </div>
      
   
  )
}

export default LoginScreen
