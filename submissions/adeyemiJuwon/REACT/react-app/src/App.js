import './App.css';

import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendor from './components/Vendor';
import CartPage from './components/CartPage';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';
import OrderUnsuccessful from './components/OrderUnsuccessful';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/verification" element={<Verification />} />
          <Route path="/success" element={<OrderSuccessful />} />
          <Route path="/unsuccess" element={<OrderUnsuccessful />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
