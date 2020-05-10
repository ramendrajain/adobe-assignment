import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import PriceRangeFilter from "../components/Products/PriceRangeFilter";
import SortByPrice from "../components/Products/SortByPrice";
import ProductList from "../components/Products/ProductList";
import MobileSortByPrice from "../components/Products/MobileSortByPrice";
import { calculateDiscountPrice } from "../utils/product.util";
import "../style/productListing.scss";
import MobilePriceRangeFilter from "../components/Products/MobilePriceRangeFilter";

const ProductListing = props => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("");

  const [visibleSortOption, setVisibleSortOption] = useState(false);
  const [visibleFilterOption, setVisibleFilterOption] = useState(false);

  useEffect(() => {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const filterByPrice = priceRange => {
    closeFilterDialog();
    let productList = products.filter(
      product =>
        calculateDiscountPrice(product.price, product.discount) >=
          priceRange.min &&
        calculateDiscountPrice(product.price, product.discount) <=
          priceRange.max
    );
    if (sortType) {
      productList = sortByPrice(sortType, productList);
    }
    setFilteredProducts(productList);
  };

  const sortProductByPrice = type => {
    setSortType(type);
    const productList = sortByPrice(type, filteredProducts);
    setFilteredProducts(productList);
  };

  const sortByPrice = (type, filteredProds) => {
    const productList = [...filteredProds];
    switch (type) {
      case "HIGH_TO_LOW":
        productList.sort(function(a, b) {
          if (
            calculateDiscountPrice(a.price, a.discount) >
            calculateDiscountPrice(b.price, b.discount)
          ) {
            return -1;
          }
          if (
            calculateDiscountPrice(b.price, b.discount) >
            calculateDiscountPrice(a.price, a.discount)
          ) {
            return 1;
          }
          return 0;
        });
        break;
      case "LOW_TO_HIGH":
        productList.sort(function(a, b) {
          if (
            calculateDiscountPrice(a.price, a.discount) >
            calculateDiscountPrice(b.price, b.discount)
          ) {
            return 1;
          }
          if (
            calculateDiscountPrice(b.price, b.discount) >
            calculateDiscountPrice(a.price, a.discount)
          ) {
            return -1;
          }
          return 0;
        });
        break;

      case "DISCOUNT":
        productList.sort(function(a, b) {
          if (a.discount > b.discount) {
            return -1;
          }
          if (a.discount < b.discount) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
    return productList;
  };
  const searchProduct = () => {
    if (props.searchTerm) {
      return filteredProducts.filter(prod =>
        prod.name.toLowerCase().includes(props.searchTerm.toLowerCase())
      );
    }
    return filteredProducts;
  };

  const openSortingDialog = () => {
    setVisibleSortOption(true);
  };

  const closeSortDialog = () => {
    setVisibleSortOption(false);
  };

  const openFilterDialog = () => {
    setVisibleFilterOption(true);
  };

  const closeFilterDialog = () => {
    setVisibleFilterOption(false);
  };

  return (
    <React.Fragment>
      <div className="filter-container">
        <div className="filter" onClick={openSortingDialog}>
          <span className="glyphicon glyphicon-triangle-top"></span>
          <span className="glyphicon glyphicon-triangle-top triangle-down"></span>{" "}
          Sort
        </div>
        <div className="filter" onClick={openFilterDialog}>
          <span className="glyphicon glyphicon-filter"></span> Filter
        </div>
      </div>
      <div className="container-fluid product-container">
        <div className="row">
          <div className="col-md-2 col-sm-3 price-range-container">
            <PriceRangeFilter filterByPrice={filterByPrice} />
          </div>
          <div className="col-md-10 col-sm-9 col-xs-12 product-det">
            <div className="sort-container">
              <SortByPrice
                sortProductByPrice={sortProductByPrice}
                sortType={sortType}
              />
            </div>
            <div className="product-list">
              <div className="row">
                <ProductList products={searchProduct()} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileSortByPrice
        sortProductByPrice={sortProductByPrice}
        closeSortDialog={closeSortDialog}
        visibleSortOption={visibleSortOption}
      />
      <MobilePriceRangeFilter
        closeFilterDialog={closeFilterDialog}
        visibleFilterOption={visibleFilterOption}
      >
        <PriceRangeFilter filterByPrice={filterByPrice} />
      </MobilePriceRangeFilter>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.search.term
  };
};

export default connect(mapStateToProps, null)(ProductListing);
