import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../store/actions/cart/cart.action";
import { calculateDiscountPrice } from "../../utils/product.util";

const ProductList = props => {
  return (
    <React.Fragment>
      {props.products.map(product => (
        <div key={product.id} className="col-md-3 col-sm-4  col-xs-6">
          <div className="itmdetails">
            <img
              className="img-responsive"
              src={product.img_url}
              alt="product"
            />
            <div className="itemname">{product.name}</div>
            <div className="price-list">
              <div className="itemprice">
                <div>
                  ₹{calculateDiscountPrice(product.price, product.discount)}
                </div>
                <s>{product.price}</s>
              </div>
              <div className="discnt">{product.discount}% off</div>
            </div>
            <div className="add-cart">
              <button
                className="btn btn-warning"
                onClick={() => props.addToCart(product, props.cart)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.items
  };
};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
