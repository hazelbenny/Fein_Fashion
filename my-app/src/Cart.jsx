// Functional component → React concept
// Props received from parent → React (cartItems, setCartItems)
function Cart({ cartItems, setCartItems }) {

  // Function to remove an item from cart → JS function
  function removeItem(indexToRemove) {

    // filter() → JS array method (used to create a new array)
    const updatedItems = cartItems.filter((item, index) => 
      index !== indexToRemove // remove the selected index
    );

    // Updating state → React concept
    setCartItems(updatedItems);
  }

  // reduce() → JS array method (used to calculate total price)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price, // adding each item's price
    0 // initial value
  );

  return (

    // Main page container → HTML + CSS
    <div className="cart-page">

      {/* Inner container for layout */}
      <div className="cart-container">

        {/* Page title → HTML */}
        <h2 className="page-title">My Cart</h2>

        {/* Conditional rendering → React + JS */}
        {cartItems.length === 0 ? (

          // If cart is empty, show this
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>

        ) : (

          // React Fragment → allows grouping without extra div
          <>
            {/* Grid layout for cart items → CSS concept */}
            <div className="cart-grid">

              {/* map() → JS (loop through array) */}
              {cartItems.map((item, index) => (

                // key → React (helps with list rendering)
                <div key={index} className="cart-card">

                  {/* Image → HTML */}
                  <img
                    src={item.image}  // JS object property
                    alt={item.name}
                    className="cart-image" // CSS styling
                  />

                  {/* Info section */}
                  <div className="cart-info">

                    {/* Item name → JSX */}
                    <h3>{item.name}</h3>

                    {/* Price display */}
                    <p className="cart-price">₹{item.price}</p>

                    {/* Button → HTML + React event */}
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)} 
                      // Arrow function → Advanced JS 
                    >
                      Remove
                    </button>

                  </div>
                </div>

              ))}
            </div>

            {/* Cart summary section */}
            <div className="cart-summary">

              {/* Showing total number of items */}
              <h3>Total Items: {cartItems.length}</h3>

              {/* Showing total price calculated using reduce() */}
              <h3>Total Price: ₹{totalPrice}</h3>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;