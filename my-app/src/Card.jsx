function Card({ title, image, alt, children }) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={image} alt={alt} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-actions">{children}</div>
    </div>
  );
}

export default Card;