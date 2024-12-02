import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  if (!Array.isArray(all_products) || all_products.length === 0) {
    return <p>Error loading products.</p>;
  }

  if (!cartItems || typeof cartItems !== "object") {
    return <p>Error loading cart items.</p>;
  }

  const cartItemElements = Object.keys(cartItems).map((id) => {
    const product = all_products.find((prod) => prod.id === parseInt(id));

    if (product) {
      return (
        <div
          key={product.id}
          className="cartitems-format cartitems-format-main"
        >
          <img
            src={product.image}
            alt={product.name}
            className="carticon-product-icon"
          />
          <p>{product.name}</p>
          <p>${product.new_price.toFixed(2)}</p>
          <button className="cartitems-quantity">
            {cartItems[product.id]}
          </button>
          <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
          <img
            className="cartitems-remove-icon"
            src={remove_icon}
            onClick={() => removeFromCart(product.id)}
            alt="Remove"
          />
          <hr />
        </div>
      );
    } else {
      console.error(`Product not found for ID: ${id}`);
      return null;
    }
  });

  if (cartItemElements.length === 0) {
    return (
      <div className="cartitems">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItemElements}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount().toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={() => navigate("/checkout")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>Enter your Promocode If You Have</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
