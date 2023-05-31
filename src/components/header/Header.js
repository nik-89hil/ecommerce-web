import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch , useSelector } from 'react-redux';
import "./header.css"
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../actions/userAction';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const dispatch = useDispatch();
  const history = useNavigate();
  const logoutHandler = () =>{
    dispatch(logout())
    history("/login")
    
    // console.log("logout")
  }


  return (
    <>
      <Navbar className='navBar2'>
        <Container>
        <LinkContainer to="/home">
          <Navbar.Brand className='companyName'><img src="https://w7.pngwing.com/pngs/17/58/png-transparent-web-development-responsive-web-design-e-commerce-business-ecommerce-blue-angle-web-design.png" style={{height:"28px",width:"28px",borderRadius:"50px"}} alt="logo_BOOKLELU" />&nbsp; BookLelu.com</Navbar.Brand>
        </LinkContainer>
          
          <Nav className="me-auto">
          <LinkContainer to="/home">
          <Nav.Link className='headerHeading'><i style={{color:"green"}} class="fa-solid fa-house"></i> home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/classics">
          <Nav.Link className='headerHeading'><i style={{color:"green"}} class="fa-solid fa-chevron-right"></i> Classics</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/historical-fiction">
          <Nav.Link className='headerHeading'>Historical-fiction</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/horror">
          <Nav.Link className='headerHeading'>Horror </Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
          <LinkContainer to="/cart">
          <Nav.Link><i style={{color:"green"}} class="fa-solid fa-cart-shopping"></i> cart</Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id="username">
              <LinkContainer to={"/myorders"}>
                <NavDropdown.Item>
                  My orders
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                  Logout
              </NavDropdown.Item>
              

            </NavDropdown>

          ):(
            <LinkContainer to="/login">
          <Nav.Link><i style={{color:"green"}} class="fa-solid fa-user"></i> Account</Nav.Link>
          </LinkContainer>
          )}
          
          
            
            
          </Nav>

        </Container>
      </Navbar>
    </>
  )
}

export default Header

