import React from 'react'
import "../header/header.css"

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className='footerCont1'>
                    <div><a href="https://www.facebook.com/" target='_blank'><i class="fa-brands fa-facebook"></i></a></div>
                    <div><a href="https://twitter.com/i/flow/login" target='_blank'><i class="fa-brands fa-twitter"></i></a></div>
                    <div><a href="mailto:nikhilkumar19072002@gmail.com"><i class="fa-solid fa-envelope"></i></a></div>
                    <div><a href="tel:9625696396"><i class="fa-solid fa-square-phone"></i></a></div>
                    <div><a href="https://github.com/nik-89hil" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></div>
                </div>
                <div style={{textAlign:"center"}}>
                    <h6 style={{color:"white"}}><i class="fa-solid fa-copyright"></i> all copyrights reserved || 2023</h6>
                    <p style={{color:"white"}}>Term and Condition Applied</p>
                    <p><a style={{color:"yellow"}} href="/">BOOKLELU.COM</a></p>
                </div>
                <div className='footerCont2'>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/classics">Classics</a></li>
                        <li><a href="/horror">Horror</a></li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Footer
