import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product"; // Ensure path is correct

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState(all_products);
  const [cartItems, setCartItems] = useState({}); // Initialize cartItems as an object

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Updated addToCart function
  const addToCart = (productId) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[productId] = (newItems[productId] || 0) + 1; // Increment the quantity
      console.log("Updated Cart Items: ", newItems); // Log the updated cart items
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      delete newItems[productId]; // Remove the item from the cart
      console.log("Updated Cart After Removal: ", newItems); // Log the updated cart items
      return newItems;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const product = products.find((product) => product.id === parseInt(id)); // Ensure ID types match
      if (product) {
        return total + product.new_price * cartItems[id];
      }
      // If product not found, log an error
      console.error(`Product not found for ID: ${id}`);
      return total; // Return current total if product not found
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  // Include getTotalCartItems in contextValue
  const contextValue = {
    all_products: products,
    cartItems,
    addProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems, // <-- Add this line
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;