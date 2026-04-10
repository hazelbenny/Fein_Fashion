import { Link, useLocation } from "react-router-dom";

function Navbar({ cartCount }) {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/collections", label: "Collections" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="brand">Fein</div>

        <div className="nav-links">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="cart-pill">🛒 {cartCount}</div>
      </nav>
    </header>
  );
}

export default Navbar;