import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './components/Vendor';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import Verification from './components/Verification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/verification" element={<Verification />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
