function LookCard({ name, image, description, setCart }) {
  return (
    <div className="look-card">
      <img src={image} alt={name} className="look-image" />
      <div className="look-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="action-btn solid" onClick={() => setCart((prev) => prev + 1)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default LookCard;