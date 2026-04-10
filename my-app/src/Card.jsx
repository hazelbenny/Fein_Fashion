// Functional component → React concept
// Props are received using destructuring → JS 
function Card({ title, image, alt, children }) {

  return (

    // Main card container → HTML structure + CSS styling
    <div className="card">

      {/* Image wrapper → helps with styling (like padding, cropping, etc.) */}
      <div className="card-image-wrap">

        {/* Image tag → HTML */}
        {/* src & alt → HTML attributes */}
        <img
          src={image}   // JS value passed as prop
          alt={alt}     // improves accessibility (HTML concept)
          className="card-image" // CSS styling
        />

      </div>

      {/* Title of the card → HTML heading */}
      <h3 className="card-title">
        {title} {/* JSX expression → React + JS */}
      </h3>

      {/* Children → React concept (for reusable components) */}
      {/* Whatever is passed between <Card> ... </Card> will appear here */}
      <div className="card-actions">
        {children}
      </div>

    </div>
  );
}

export default Card;