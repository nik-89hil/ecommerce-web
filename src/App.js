import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './components/header/Header';
import { Container } from 'react-bootstrap';
import BookDetails from './screens/BookDetails';
import Error from './components/Error';
import Classic from './components/Classic';
import CartScreen from "./screens/CartScreen";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceorderScreen from './screens/PlaceorderScreen';
import Historic from './components/Historic';
import Horror from "./components/Horror";
import OrderScreen from './screens/OrderScreen';
import Footer from './components/footer/Footer';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <>

  
    
    <BrowserRouter>
    <Header/>
    <main className='my-3'>
      <Container>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/payment' element={<PaymentScreen/>} />
        <Route path='/placeorder' element={<PlaceorderScreen/>} />


        <Route path='/classics' element={<Classic/>} />
        <Route path='/historical-fiction' element={<Historic/>} />
        <Route path='/horror' element={<Horror/>} />
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/order/:id" element={<OrderScreen/>}/>

        <Route path='/cart/:id?' element={<CartScreen/>}/>
        <Route path='/myorders' element={<ProfileScreen/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Container>

    </main>
    <Footer/>
      
     
    </BrowserRouter>
   
   
    

    </>
  );
}

export default App;
