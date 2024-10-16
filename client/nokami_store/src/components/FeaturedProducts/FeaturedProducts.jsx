import React, { useState, useEffect } from "react";
import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";

export const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/`); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data); // Update the products state with fetched data
      } catch (error) {
        setError(error.message); // Set the error state
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [type]); // Depend on 'type' so the effect runs when 'type' changes

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error}</div>; // Error state

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          voluptates temporibus cupiditate cum et architecto, in natus unde
          ipsum ad nihil sapiente ab, ut quisquam voluptate dignissimos possimus
          omnis veritatis!
        </p>
      </div>
      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
