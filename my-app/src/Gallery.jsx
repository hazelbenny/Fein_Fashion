import { useState } from "react";
import { Link } from "react-router-dom";

function Gallery() {
  const [search, setSearch] = useState("");

  const looks = [
    {
      id: "1",
      name: "Elegant Shirt",
      image: "/look1.png",
      description: "Elegant pink shirt perfect for office wear.",
    },
    {
      id: "2",
      name: "Pink Cargo Pants",
      image: "/look2.png",
      description: "Stylish cargo pants for casual fashion.",
    },
    {
      id: "3",
      name: "Cold Shoulder Top",
      image: "/look3.png",
      description: "Trendy top for casual and party wear.",
    },
    {
      id: "4",
      name: "Elegant Trousers",
      image: "/look4.png",
      description: "Perfect formal trousers for a refined look.",
    },
    {
      id: "5",
      name: "Long Top",
      image: "/look5.png",
      description: "Comfortable long top for daily wear.",
    },
  ];

  const filteredLooks = looks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">Fein Lookbook</h2>

      <div className="search-bar-wrap">
        <input
          type="text"
          className="search-input"
          placeholder="Search looks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="look-grid">
        {filteredLooks.map((item) => (
          <div key={item.id} className="look-card">
            <div className="look-image-wrap">
              <img src={item.image} alt={item.name} className="look-image" />
            </div>

            <div className="look-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <Link to={`/look/${item.id}`} className="action-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;