import Home from './pages/home/home';
import ShopingCart from './pages/cart/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShopingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
