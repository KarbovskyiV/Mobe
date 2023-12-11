import React from 'react';

const FiltersList = ({ products }) => (
  <div>
    <h2>Товари</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  </div>
);

export default FiltersList;