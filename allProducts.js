// AllProducts.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import axios from 'axios';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    // Fetch products from backend API with filters and pagination
    axios.get(backend/api/products?page=${currentPage}&perPage=${productsPerPage}&filters=${JSON.stringify(filters)})
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, [currentPage, filters, productsPerPage]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <FilterSidebar setFilters={setFilters} />
      <div className="products-container">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default AllProducts;