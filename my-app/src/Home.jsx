import { Link } from "react-router-dom";
import Card from "./Card.jsx";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Fein</h1>
          <p>Trendy Fashion, Affordable Prices</p>
          <Link to="/collections" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="info-section">
        <h2>Why Shop with Fein?</h2>
        <p>
          Fein brings you the latest fashion trends at unbeatable prices. From
          daily essentials to statement pieces, our collections are designed to
          help you express your style with confidence.
        </p>
      </section>

      <section className="section-wrap">
        <h2 className="section-title">Featured Collections</h2>

        <div className="card-grid">
          <Card title="Women's Wear" image="/woman.png" alt="Women's Wear">
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