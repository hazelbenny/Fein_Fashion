import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Collections from "./Collections.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import LookDetail from "./LookDetail.jsx";
import Cart from "./Cart.jsx";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("feinCartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feinCartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar cartCount={cartItems.length} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/look/:id"
            element={
              <LookDetail
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="site-footer">
          <p>© 2026 Fein | Fashion for Everyone</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;