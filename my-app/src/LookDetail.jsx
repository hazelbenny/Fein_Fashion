import { useState } from "react";
import { useParams } from "react-router-dom";

function LookDetail({ cartItems, setCartItems }) {
  const { id } = useParams();

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

  const product = products.find((p) => p.id === id);

  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const [name, setName] = useState("");
  const [newReview, setNewReview] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || newReview.trim() === "") {
      return;
    }

    const reviewObj = {
      name: name,
      text: newReview,
    };

    setReviews([...reviews, reviewObj]);
    setName("");
    setNewReview("");
  }

  function handleAddToCart() {
    if (!product) return;

    const itemToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    };

    setCartItems([...cartItems, itemToAdd]);
  }

  if (!product) {
    return (
      <div className="page-container">
        <h2 className="page-title">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="look-page">
      <div className="look-detail-card">
        <div className="look-left">
          <div className="look-main-image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="look-detail-image"
            />
          </div>
        </div>

        <div className="look-right">
          <span className="look-badge">Fein Exclusive</span>
          <h1 className="look-title">{product.name}</h1>
          <p className="look-price">₹{product.price}</p>
          <p className="look-description">{product.description}</p>

          <button className="product-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="review-layout">
        <div className="reviews-panel">
          <h2 className="section-heading">Customer Reviews</h2>

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

        <div className="add-review-panel">
          <h2>Add Review</h2>

          <form onSubmit={handleSubmit} className="review-form">
            <input
              type="text"
              className="review-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              className="review-textarea"
              placeholder="Write your review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />

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