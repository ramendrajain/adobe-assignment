import React, { useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

const PriceFilter = props => {
  const minPrice = 100;
  const maxPrice = 1000;
  const step = 50;
  const [priceRange, setPriceRange] = useState({ min: 100, max: 400 });

  const applyPriceFilter = () => {
    props.filterByPrice(priceRange);
  };

  return (
    <div className="filters">
      <div className="range-container">
        <div className="filter-scale">Filters</div>
        <InputRange
          maxValue={maxPrice}
          minValue={minPrice}
          step={step}
          value={priceRange}
          onChange={value => setPriceRange(value)}
        />
        <div className="price-range">Price</div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={applyPriceFilter}
      >
        Apply
      </button>
    </div>
  );
};

export default PriceFilter;
