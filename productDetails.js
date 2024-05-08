// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(backend/api/product/${id})
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ProductDetail;