import { Link } from "react-router-dom";
import Card from "./Card.jsx";

function Collections() {
  return (
    <div className="page-container">
      <h2 className="page-title">Our Collections</h2>

      <div className="card-grid large-grid">
        <Card title="Women's Wear" image="/woman.png" alt="Women's Wear">
          <Link to="/gallery" className="action-btn">Explore</Link>
        </Card>

        <Card title="Men's Wear" image="/man.png" alt="Men's Wear">
          <Link to="/gallery" className="action-btn">Explore</Link>
        </Card>

        <Card title="Accessories" image="/acc.png" alt="Accessories">
          <Link to="/gallery" className="action-btn">Explore</Link>
        </Card>

        <Card title="Shoes" image="/shoes.png" alt="Shoes">
          <Link to="/gallery" className="action-btn">Explore</Link>
        </Card>

        <Card title="Kids Collection" image="/kid.png" alt="Kids Collection">
          <Link to="/gallery" className="action-btn">Explore</Link>
        </Card>
      </div>
    </div>
  );
}

export default Collections;