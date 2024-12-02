import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
      </Link>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        {props.old_price && (
          <div className="item-price-old">${props.old_price}</div>
        )}
      </div>
    </div>
  );
};

export default Item;
