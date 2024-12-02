import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
            <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box"> Description</div>
                <div className="descriptionbox-nav-box fade"> Reviews (122)</div>

            </div>
            <div className="descriptionbox-description">
                <p>
                "An E-Commerce website is a dynamic online platform that allows users to effortlessly browse, purchase, and manage products or services from anywhere, anytime. 
                Designed with user-friendly navigation, secure payment options, and personalized recommendations, it provides a seamless shopping experience, enabling businesses to reach a global audience and customers to find everything they need at their fingertips." 
                </p>
                <p>
                "An E-Commerce website displays products in a visually appealing and organized layout, allowing customers to browse items by category, view detailed product descriptions, compare prices, and read reviews.
                With high-quality images, product filters, and search functionality, customers can easily find what they're looking for, make informed purchase decisions, and enjoy a streamlined checkout process for a convenient online shopping experience."
                </p>
            </div>
            </div>

    )
} 


export default DescriptionBox