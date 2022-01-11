import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Cart } from './components/Cart';
import { ProductDetails } from './components/ProductDetails';
import { StoreProvider } from './context/StoreContext';
import { Checkout } from './components/Checkout';
import { Payment } from './components/Payment';
import { Error404 } from './components/Error404';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/:error' element={<Error404 />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/payment' element={<Payment />} />
        </Routes>
      </Router>
    </StoreProvider>
  );

}

export default App;
