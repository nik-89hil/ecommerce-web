import React from 'react'
import { useSelector } from 'react-redux'
import '../components/header/header.css'



const ProfileScreen = () => {
    const alldetails = JSON.parse(localStorage.getItem("MyList"));
    console.log(alldetails[0].title)
  return (
    <>

    <h1>My Orders......</h1>
    <br />
    <br />
      {
        [alldetails].map((e,idx)=>{
            return(
                <div className='myorderlist' key={idx}>
                    <p><i style={{fontSize:"23px"}} class="fa-solid fa-circle-check"></i> Name of the book : {e[idx].title} <i class="fa-solid fa-circle-chevron-right"></i> Quantity : {e[idx].qty}<i class="fa-solid fa-circle-chevron-right"></i>Price : {e[idx].price}<i class="fa-solid fa-circle-chevron-right"></i> orderId : #{e[idx]._id} </p>

                </div>
                
            )

        })
      }
    </>
  )
}

export default ProfileScreen
