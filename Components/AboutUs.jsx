import React from 'react';
import './AboutUs.css';

// Import team member images
// (Removed imports for team member images since they are no longer used)

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Your trusted source for fashion for men, women, and kids!</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We strive to provide high-quality, stylish clothing for every member of your family. Whether you're shopping for men, women, or kids, we have a wide range of products that combine comfort, style, and affordability.
        </p>
      </section>

      <section className="categories-section">
        <div className="category-card">
          <h3>Men's Collection</h3>
          <p>
            Explore our men's collection featuring the latest trends in casual and formal wear.
          </p>
        </div>

        <div className="category-card">
          <h3>Women's Collection</h3>
          <p>
            Discover our women’s collection with a variety of styles, from everyday essentials to chic dresses.
          </p>
        </div>

        <div className="category-card">
          <h3>Kids' Collection</h3>
          <p>
            Shop our kids' collection for durable, trendy, and comfortable clothing for boys and girls.
          </p>
        </div>
      </section>

      <section className="about-company">
        <h2>About the Company</h2>
        <p>ShopHub has been a leader in fashion retail since 2010.</p>
        <p><strong>Address:</strong> 123 Fashion St, Style City, CA 90210</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@shophub.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
