// src/components/Checkout.js
/*import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import './CSS/Checkout.css'
const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [userName, setUserName] = useState(""); // State for user name
  const [userAddress, setUserAddress] = useState(""); // State for user address
  const [userPhone, setUserPhone] = useState(""); // State for user phone
  const [userEmail, setUserEmail] = useState(""); // State for user email
  const [creditCardNumber, setCreditCardNumber] = useState(""); // State for credit card number
  const [confirmationMessage, setConfirmationMessage] = useState(""); // State for confirmation message

  // Check if there are any items in the cart
  if (Object.keys(cartItems).length === 0) {
    return <p>Your cart is empty. Please add items to your cart before checking out.</p>;
  }

  // Function to handle order confirmation
  const handleConfirmOrder = () => {
    // Check if all fields are filled out
    if (!userName || !userAddress || !userPhone || !userEmail || !creditCardNumber) {
      setConfirmationMessage("Please fill in all fields before confirming your order.");
      return;
    }

    // Here you can add any additional logic (e.g., processing the order)
    setConfirmationMessage(`Thank you, ${userName}! Your order has been confirmed!`); // Set confirmation message
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Your Order Summary</h2>
      <ul>
        {Object.keys(cartItems).map((id) => (
          <li key={id}>
            Product ID: {id}, Quantity: {cartItems[id]}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${getTotalCartAmount().toFixed(2)}</h3>

      <div>
        <label>
          Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // Update userName state
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)} // Update userAddress state
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)} // Update userPhone state
            required
            placeholder="(123) 456-7890" // Optional placeholder format
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)} // Update userEmail state
            required
          />
        </label>
        <br />
        <label>
          Credit Card Number:
          <input
            type="text"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)} // Update creditCardNumber state
            required
            placeholder="XXXX-XXXX-XXXX-XXXX" // Placeholder format for card number
          />
        </label>
        <br />
        <button onClick={handleConfirmOrder}>Confirm Order</button>
      </div>

      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default Checkout;
*/

import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopContext } from "../Context/ShopContext";
import all_product from "../Components/Assets/all_product";

const Checkout = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation for email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check if a payment method is selected
    if (!paymentMethod) {
      setError("Please select a payment method.");
      return;
    }

    // Logic to send order confirmation (e.g., via email or API call)
    // Replace this with your actual email sending logic
    console.log("Order placed:", {
      email,
      cartItems,
      total: getTotalCartAmount(),
      paymentMethod,
    });

    // Simulate sending an email
    setTimeout(() => {
      setSuccess(
        "Order placed successfully! A confirmation has been sent to your email."
      );
      setError("");
    }, 1000);
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">
              {Object.keys(cartItems).length}
            </span>
          </h4>
          <ul className="list-group mb-3 sticky-top">
            {Object.keys(cartItems).map((id) => {
              const product = all_product.find(
                (prod) => prod.id === parseInt(id)
              );
              if (product) {
                return (
                  <li
                    key={product.id}
                    className="list-group-item d-flex justify-content-between lh-condensed"
                  >
                    <div>
                      <h6 className="my-0">{product.name}</h6>
                      <small className="text-muted">
                        {product.description || "Brief description"}
                      </small>
                    </div>
                    <span className="text-muted">
                      ${(product.new_price * cartItems[product.id]).toFixed(2)}
                    </span>
                  </li>
                );
              }
              return null;
            })}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${getTotalCartAmount().toFixed(2)}</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form
            className="needs-validation"
            onSubmit={handleSubmit}
            noValidate=""
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Required)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="invalid-feedback">{error}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                  <option>Egypt</option>
                  <option>Palestine</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback"> Zip code required. </div>
              </div>
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  onChange={() => setPaymentMethod("credit")}
                  required
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  onChange={() => setPaymentMethod("debit")}
                  required
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  onChange={() => setPaymentMethod("paypal")}
                  required
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">
                  {" "}
                  Name on card is required{" "}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Credit card number is required{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  {" "}
                  Expiration date required{" "}
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback"> Security code required </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Place Order
            </button>
            {success && (
              <div className="alert alert-success mt-3">{success}</div>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
