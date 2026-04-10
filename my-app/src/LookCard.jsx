// Functional component → React concept
// Props received → React (name, image, description, setCart)
function LookCard({ name, image, description, setCart }) {

  return (

    // Main card container → HTML + CSS styling
    <div className="look-card">

      {/* Image → HTML */}
      <img
        src={image}          // JS value passed as prop
        alt={name}           // HTML accessibility
        className="look-image" // CSS styling
      />

      {/* Content section */}
      <div className="look-content">

        {/* Item name */}
        <h3>{name}</h3> {/* JSX expression → React + JS */}

        {/* Description */}
        <p>{description}</p>

        {/* Button → Js + React event handling */}
        <button
          className="action-btn solid"

          // onClick → React event
          // Arrow function → Advanced JS
          onClick={() =>
            setCart((prev) => prev + 1)
            // Functional state update → React
            // prev → previous state value (Advanced JS concept)
          }
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default LookCard;