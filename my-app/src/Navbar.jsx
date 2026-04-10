// Importing Link → React Router (for navigation)
// Importing useLocation → React Router (to know current URL path)
import { Link, useLocation } from "react-router-dom";

// Functional component → React concept
// cartCount received as prop → React (data from parent)
function Navbar({ cartCount }) {

  // useLocation() → React Router
  // Gives current URL info (like /home, /about, etc.)
  const location = useLocation();

  // Array of navigation links → JS (array of objects)
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/collections", label: "Collections" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
    { path: "/cart", label: "Cart" },
  ];

  return (

    // Header → HTML semantic element
    <header className="site-header">

      {/* Navigation bar → HTML */}
      <nav className="nav">

        {/* Brand name/logo */}
        <div className="brand">Fein</div>

        {/* Navigation links container → CSS layout */}
        <div className="nav-links">

          {/* map() → JS (loop through links array) */}
          {links.map((item) => (

            // Link → React Router navigation
            <Link
              key={item.path} 

              to={item.path}  

              // Conditional class → JS + React
              // Highlights active page
              className={
                location.pathname === item.path
                  ? "nav-link active" // CSS class for active link
                  : "nav-link"
              }
            >
              {item.label} {/* Display link text */}
            </Link>

          ))}

        </div>

        {/* Cart display → HTML + React */}
        <div className="cart-pill">
          🛒 {cartCount} 
          {/* cartCount → React prop (dynamic value) */}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;