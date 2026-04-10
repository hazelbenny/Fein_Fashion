function Cart({ cartItems, setCartItems }) {
  function removeItem(indexToRemove) {
    const updatedItems = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="page-title">My Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="cart-grid">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-card">
                  <img src={item.image} alt={item.name} className="cart-image" />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p className="cart-price">₹{item.price}</p>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total Items: {cartItems.length}</h3>
              <h3>Total Price: ₹{totalPrice}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;