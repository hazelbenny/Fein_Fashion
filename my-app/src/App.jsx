// Importing routing components → React Router (React concept)
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing hooks → useState & useEffect (React hooks)
import { useEffect, useState } from "react";

// Importing different components → React
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Collections from "./Collections.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import LookDetail from "./LookDetail.jsx";
import Cart from "./Cart.jsx";

// Importing CSS file → styling (CSS concept)
import "./App.css";

// Functional component → React concept 
function App() {

  // useState → React (state management)
  // cartItems is an array → JS concept (array)
  const [cartItems, setCartItems] = useState([]);

  // useEffect → React (runs after component loads)
  useEffect(() => {

    //for storage

    // localStorage → Browser API (JS concept)
    const savedCart = localStorage.getItem("feinCartItems");

    if (savedCart) {
      // JSON.parse → JS (convert string back to object/array)
      // JSON → script built similar to a dictionary
      setCartItems(JSON.parse(savedCart));
    }

  }, []); // [] means this runs only once (component mount)

  // Another useEffect → runs whenever cartItems changes
  useEffect(() => {

    // JSON.stringify → JS (convert array to string for storage)
    localStorage.setItem("feinCartItems", JSON.stringify(cartItems));

  }, [cartItems]); // dependency array → runs when cartItems updates

  return (

    // BrowserRouter → React Router (handles navigation without reload)
    <BrowserRouter>

      {/* Main wrapper div → HTML + CSS layout */}
      <div className="app-shell">

        {/* Navbar component → React component */}
        {/* Passing props → React concept */}
        <Navbar cartCount={cartItems.length} />
        {/* cartItems.length → JS (array length) */}

        {/* Routes container → React Router */}
        <Routes>

          {/* Route → defines path and component */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/collections" element={<Collections />} />

          <Route path="/gallery" element={<Gallery />} />

          {/* Dynamic route → :id (React Router concept) */}
          <Route
            path="/look/:id"
            element={
              <LookDetail
                cartItems={cartItems}        // passing state as prop
                setCartItems={setCartItems}  // passing function as prop
              />
            }
          />

          {/* Cart page route */}
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

        {/* Footer → HTML structure */}
        <footer className="site-footer">
          {/* Paragraph → HTML */}
          <p>© 2026 Fein | Fashion for Everyone</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;