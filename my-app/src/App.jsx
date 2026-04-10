// Importing routing + hooks → React + React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

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

  // State only → React (temporary storage)
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <div className="app-shell">

        {/* Passing cart count → React props */}
        <Navbar cartCount={cartItems.length} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Passing state + updater */}
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