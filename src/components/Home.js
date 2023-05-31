import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen'
import axios from 'axios'
import "./header/header.css"
import { searchthis } from '../actions/bookAction'
import Corseal from './Corseal'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Header from '../header/Header'

const Home = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState();
  
  const submitHandler = async(e) =>{
    e.preventDefault()
    //dispatch code 
    // dispatch(login(email,password))

    if(search.toUpperCase() === "HORROR" || search.toUpperCase() === "HISTORICALFICTION" || search.toUpperCase() ==="HISTORICAL-FICTION"  || search.toUpperCase() === "HISTORICAL FICTION" || search.toUpperCase() === "CLASSIC"){
      const {data} = await axios.post("/home",{search});
      setData(data); 
    }else{
      
      console.log(search.toUpperCase())
      window.alert(`we have only three categories currently select one of them - classic, horror and historical fiction`);


    }
    

    // console.log(data.map(e=>e._id))
    
}

  return (
    <>
    {/* <Header/> */}

    <h1 style={{textAlign:"center",marginTop:"10vh",fontSize:"38px"}}>welcome to <a className='animationPerf' href="/">BOOKLELU.COM</a></h1>


    <div className='searchBox'>
      <form onSubmit={submitHandler}>
        <p><input type="text" name="wantThis"  id="" placeholder="search by category ..." value={search} onChange={(e)=>setSearch(e.target.value)}  /><button><i  class="fa-solid fa-magnifying-glass"></i></button></p>
    
        
      </form>
      <p>{localStorage.getItem("searchMessage")}</p>
      
    </div>
    <div className='DesignBack'>
      <h6 style={{color:'white'}}>result found : <i  class="fa-solid fa-magnifying-glass"></i></h6>
      {
        data && data.map((e,id)=>{
          return(
            // <p key={id}>{e.title}</p>
            <div key={id} >
            <Link style={{color:"white"}} to={`/books/${e._id}`}>{e.title}</Link><br/>
            </div>
            
          )
        })
      }
     
     
    </div>
    <h1 style={{textAlign:"center"}}>Our Book Collection...</h1>

    <HomeScreen/>

   
      
    </>
  )
}

export default Home
