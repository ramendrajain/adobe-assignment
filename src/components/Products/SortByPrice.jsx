import React from "react";

const SortByFilter = props => {
  const sortProduct = type => {
    props.sortProductByPrice(type);
  };

  return (
    <div className="sort-options">
      <ul>
        <li className="filtersort">Sort By</li>
        <li
          onClick={() => sortProduct("HIGH_TO_LOW")}
          className={props.sortType === "HIGH_TO_LOW" ? "active" : ""}
        >
          Price--High Low
        </li>
        <li
          onClick={() => sortProduct("LOW_TO_HIGH")}
          className={props.sortType === "LOW_TO_HIGH" ? "active" : ""}
        >
          Price--Low High
        </li>
        <li
          onClick={() => sortProduct("DISCOUNT")}
          className={props.sortType === "DISCOUNT" ? "active" : ""}
        >
          Discount
        </li>
      </ul>
    </div>
  );
};
export default SortByFilter;
