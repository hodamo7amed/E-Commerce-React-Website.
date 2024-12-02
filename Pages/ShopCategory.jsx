import React, { useContext, useState } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState(all_products); // State for sorted products
  const [sortOption, setSortOption] = useState('default'); // Track selected sort option
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

  // Handle sort option change
  const handleSortChange = (option) => {
    let sortedArray = [...all_products];
    switch (option) {
      case 'price-asc':
        sortedArray.sort((a, b) => a.new_price - b.new_price);
        break;
      case 'price-desc':
        sortedArray.sort((a, b) => b.new_price - a.new_price);
        break;
      default:
        sortedArray = all_products;
    }
    setSortedProducts(sortedArray);
    setSortOption(option);
    setShowDropdown(false); // Close dropdown after selection
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <span onClick={toggleDropdown}>
            Sort by <img src={dropdown_icon} alt="dropdown icon" />
          </span>
          {showDropdown && (
            <ul className="sort-options">
              <li onClick={() => handleSortChange('price-asc')}>Price: Low to High</li>
              <li onClick={() => handleSortChange('price-desc')}>Price: High to Low</li>
              <li onClick={() => handleSortChange('default')}>Default</li>
            </ul>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
