// Importing useState → React hook (for managing search input)
import { useState } from "react";

// Importing Link → React Router (for navigation without reload)
import { Link } from "react-router-dom";

// Functional component → React concept
function Gallery() {

  // State to store search input → React
  const [search, setSearch] = useState("");

  // Array of objects → JS (data structure)
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

  // filter() → JS (used to search items based on input)
  const filteredLooks = looks.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
    // toLowerCase() → JS (makes search case-insensitive)
  );

  return (

    // Page container → HTML + CSS layout
    <div className="page-container">

      {/* Heading → HTML */}
      <h2 className="page-title">Fein Lookbook</h2>

      {/* Search bar wrapper → CSS styling */}
      <div className="search-bar-wrap">

        {/* Input field → HTML */}
        <input
          type="text"
          className="search-input"
          placeholder="Search looks..." // placeholder → HTML attribute

          value={search} 
          
          // onChange → React event handling
          onChange={(e) => setSearch(e.target.value)} 
          // Arrow function → Advanced JS
        />
      </div>

      {/* Grid for displaying items → CSS*/}
      <div className="look-grid">

        {/* map() → JS (loop through filtered items) */}
        {filteredLooks.map((item) => (

          // key → React (helps efficiently update UI)
          <div key={item.id} className="look-card">

            {/* Image section */}
            <div className="look-image-wrap">

              <img
                src={item.image}  // JS object property
                alt={item.name}   // HTML accessibility
                className="look-image" // CSS styling
              />

            </div>

            {/* Content section */}
            <div className="look-content">

              {/* Item name */}
              <h3>{item.name}</h3>

              {/* Description */}
              <p>{item.description}</p>

              {/* Link → React Router navigation */}
              <Link
                to={`/look/${item.id}`} 
                className="action-btn"
              >
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