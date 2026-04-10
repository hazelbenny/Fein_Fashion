// Importing Link → React Router (for navigation without reloading page)
import { Link } from "react-router-dom";

// Importing Card component → React (reusability)
import Card from "./Card.jsx";

// Functional component → React concept
function Home() {
  return (

    // React Fragment → allows multiple sections without extra div (React)
    <>
      
      {/* Hero section → HTML structure + CSS */}
      <section className="hero">

        <div className="hero-overlay">
          
          {/* Main heading → HTML */}
          <h1>Welcome to Fein</h1>

          {/* Tagline → HTML */}
          <p>Trendy Fashion, Affordable Prices</p>

          {/* Link → React Router navigation */}
          <Link to="/collections" className="hero-btn">
            Shop Now
          </Link>

        </div>
      </section>

      {/* Info section → HTML + CSS layout */}
      <section className="info-section">

        <h2>Why Shop with Fein?</h2>

        <p>
          Fein brings you the latest fashion trends at unbeatable prices.
        </p>

      </section>

      {/* Section for featured collections */}
      <section className="section-wrap">

        {/* Section title */}
        <h2 className="section-title">Featured Collections</h2>

        {/* Grid layout → CSS*/}
        <div className="card-grid">

          {/* Reusable Card component → React */}
          <Card
            title="Women's Wear"  
            image="/woman.png"   
            alt="Women's Wear"    
          >

            {/* children → React (content inside Card) */}
            <Link to="/gallery" className="action-btn">
              View Looks
            </Link>

          </Card>

          <Card title="Men's Wear" image="/man.png" alt="Men's Wear">
            <Link to="/gallery" className="action-btn">
              View Looks
            </Link>
          </Card>

          <Card title="Accessories" image="/acc.png" alt="Accessories">
            <Link to="/gallery" className="action-btn">
              View Looks
            </Link>
          </Card>

        </div>
      </section>

    </>
  );
}

export default Home;