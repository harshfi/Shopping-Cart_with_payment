import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Success from './pages/success';
import Store from './pages/store';
import Cancel from './pages/cancel';
import CartProvider from './CartContext';
function App() {
  return (
    <CartProvider>
    <Container>
    <NavbarComp>
    </NavbarComp>
    <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="cancel" element={<Cancel/>}/>

      </Routes>
    </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;
