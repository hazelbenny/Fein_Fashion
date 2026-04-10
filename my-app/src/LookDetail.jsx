// Importing useState → React hook (used for storing changing values)
// Importing useParams → React Router hook (used to read id from URL)
import { useState } from "react";
import { useParams } from "react-router-dom";

// Functional component → React concept
// Props received from parent → React (cartItems, setCartItems)
function LookDetail({ cartItems, setCartItems }) {

  // useParams() → React Router
  // It gets the product id from the URL like /look/1
  const { id } = useParams();

  // Array of product objects → JavaScript concept
  const products = [
    {
      id: "1",
      name: "Elegant Shirt",
      image: "/look1.png",
      price: 1499,
      description: "Elegant pink shirt perfect for office wear.",
      reviews: [
        { name: "Aisha", text: "Very classy and comfortable." },
        { name: "Riya", text: "Loved the fit and fabric quality." },
      ],
    },
    {
      id: "2",
      name: "Pink Cargo Pants",
      image: "/look2.png",
      price: 1899,
      description: "Stylish cargo pants for casual fashion.",
      reviews: [
        { name: "Neha", text: "Super trendy and stylish." },
        { name: "Kavya", text: "Really comfortable to wear." },
      ],
    },
    {
      id: "3",
      name: "Cold Shoulder Top",
      image: "/look3.png",
      price: 1299,
      description: "Trendy top for casual and party wear.",
      reviews: [
        { name: "Sneha", text: "Perfect for outings!" },
        { name: "Ananya", text: "Loved the design." },
      ],
    },
    {
      id: "4",
      name: "Elegant Trousers",
      image: "/look4.png",
      price: 2099,
      description: "Perfect formal trousers.",
      reviews: [
        { name: "Megha", text: "Very elegant and classy." },
        { name: "Pooja", text: "Great fit for office wear." },
      ],
    },
    {
      id: "5",
      name: "Long Top",
      image: "/look5.png",
      price: 1399,
      description: "Comfortable long top for daily wear.",
      reviews: [
        { name: "Isha", text: "Simple and stylish." },
        { name: "Divya", text: "Very comfortable!" },
      ],
    },
  ];

  // find() → JavaScript array method
  // Used to get the selected product whose id matches the URL id
  const product = products.find((p) => p.id === id);

  // useState → React
  // reviews state stores all reviews for the current product
  const [reviews, setReviews] = useState(product ? product.reviews : []);

  // State for review form inputs
  const [name, setName] = useState("");
  const [newReview, setNewReview] = useState("");

  // Function to handle review form submission → JS + React
  function handleSubmit(e) {
    e.preventDefault();
    // Prevents the form from refreshing the page → HTML form behavior control

    // trim() → JS string method
    // This makes sure empty spaces are not accepted as valid input
    if (name.trim() === "" || newReview.trim() === "") {
      return;
    }

    // Creating a review object → JS object
    const reviewObj = {
      name: name,
      text: newReview,
    };

    // Adding the new review to existing reviews
    // Spread operator (...) → Advanced JS
    setReviews([...reviews, reviewObj]);

    // Clearing form fields after submission → React state update
    setName("");
    setNewReview("");
  }

  // Function to add selected product to cart
  function handleAddToCart() {

    // Safety check in case product does not exist
    if (!product) return;

    // Creating a smaller object with only needed cart details
    const itemToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    };

    // Updating cart items → React state update
    // Spread operator keeps old items and adds new one
    setCartItems([...cartItems, itemToAdd]);
  }

  // Conditional rendering → React
  // If no matching product is found, show this message
  if (!product) {
    return (
      <div className="page-container">
        <h2 className="page-title">Product not found</h2>
      </div>
    );
  }

  return (

    // Main page wrapper → HTML + CSS
    <div className="look-page">

      {/* Product detail section */}
      <div className="look-detail-card">

        {/* Left side for product image */}
        <div className="look-left">
          <div className="look-main-image-wrap">
            <img
              src={product.image} // JS object property
              alt={product.name}  // HTML accessibility
              className="look-detail-image" // CSS styling
            />
          </div>
        </div>

        {/* Right side for product info */}
        <div className="look-right">

          {/* span → HTML inline element */}
          <span className="look-badge">Fein Exclusive</span>

          {/* Product title */}
          <h1 className="look-title">{product.name}</h1>

          {/* Price */}
          <p className="look-price">₹{product.price}</p>

          {/* Description */}
          <p className="look-description">{product.description}</p>

          {/* Button → Js + React event handling */}
          <button className="product-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Review section layout */}
      <div className="review-layout">

        {/* Existing reviews panel */}
        <div className="reviews-panel">
          <h2 className="section-heading">Customer Reviews</h2>

          {/* map() → JavaScript
              Used to display each review one by one */}
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-top">
                <span className="review-user">{review.name}</span>
                <span className="review-stars">★★★★★</span>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Review form panel */}
        <div className="add-review-panel">
          <h2>Add Review</h2>

          {/* form → Js */}
          <form onSubmit={handleSubmit} className="review-form">

            {/* Controlled input → React */}
            <input
              type="text"
              className="review-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // Arrow function → Advanced JS
            />

            {/* textarea → Js */}
            <textarea
              className="review-textarea"
              placeholder="Write your review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit" className="submit-review-btn">
              Submit Review
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LookDetail;