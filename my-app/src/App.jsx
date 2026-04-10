// Importing routing components → React Router (React concept)
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing useState → React hook (state management)
import { useState } from "react";

// Importing components → React (component-based structure)
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Collections from "./Collections.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import LookDetail from "./LookDetail.jsx";
import Cart from "./Cart.jsx";

// Importing CSS → styling (CSS concept)
import "./App.css";

// Functional component → React concept (modern approach)
function App() {

  // useState → React (used to store cart items)
  // Array → JS (stores multiple product objects)
  const [cartItems, setCartItems] = useState([]);

  return (

    // BrowserRouter → React Router (handles navigation without reload)
    <BrowserRouter>

      {/* Main wrapper → HTML + CSS layout */}
      <div className="app-shell">

        {/* Navbar component → React */}
        {/* Passing cart count as prop → React */}
        <Navbar cartCount={cartItems.length} />
        {/* .length → JS (array property) */}

        {/* Routes container → React Router */}
        <Routes>

          {/* Route → defines URL path and component */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/collections" element={<Collections />} />

          <Route path="/gallery" element={<Gallery />} />

          {/* Dynamic route → React Router (uses URL parameter) */}
          <Route
            path="/look/:id"
            element={
              <LookDetail
                cartItems={cartItems}        // passing state → React props
                setCartItems={setCartItems}  // passing updater function
              />
            }
          />

          {/* Cart route */}
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

        {/* Footer → HTML semantic element */}
        <footer className="site-footer">

          {/* Paragraph → HTML */}
          <p>© 2026 Fein | Fashion for Everyone</p>

        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;