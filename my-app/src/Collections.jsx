// Importing Link → React Router (used for navigation without page reload)
import { Link } from "react-router-dom";

// Importing Card component → React (component reuse)
import Card from "./Card.jsx";

// Functional component → React concept
function Collections() {
  return (

    // Main page container → HTML structure + CSS layout
    <div className="page-container">

      {/* Page title → HTML */}
      <h2 className="page-title">Our Collections</h2>

      {/* Grid layout for cards → CSS */}
      <div className="card-grid large-grid">

        {/* Reusable Card component → React */}
        <Card
          title="Women's Wear"   // props → React
          image="/woman.png"     // image path 
          alt="Women's Wear"     // alt text → HTML accessibility
        >
          {/* children → React (content passed inside Card) */}

          {/* Link → React Router (client-side navigation) */}
          <Link to="/gallery" className="action-btn">
            Explore
          </Link>

        </Card>

        <Card title="Men's Wear" image="/man.png" alt="Men's Wear">
          <Link to="/gallery" className="action-btn">
            Explore
          </Link>
        </Card>

        <Card title="Accessories" image="/acc.png" alt="Accessories">
          <Link to="/gallery" className="action-btn">
            Explore
          </Link>
        </Card>

        <Card title="Shoes" image="/shoes.png" alt="Shoes">
          <Link to="/gallery" className="action-btn">
            Explore
          </Link>
        </Card>

        <Card title="Kids Collection" image="/kid.png" alt="Kids Collection">
          <Link to="/gallery" className="action-btn">
            Explore
          </Link>
        </Card>

      </div>
    </div>
  );
}

export default Collections;