import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Search from "../Search/Index";

import "../../style/header.scss";

const Header = props => {
  let cartCount = 0;
  props.cart.forEach(item => {
    cartCount += item.quantity;
  });
  return (
    <Fragment>
      <div className="header-bar">
        <div className="header-left">
          <Link to="/">
            <span className="glyphicon glyphicon-star" />
          </Link>
        </div>
        <div className="header-right">
          <Search />
          <Link to="/checkout">
            <span className="glyphicon glyphicon-shopping-cart" />
          </Link>
          {cartCount ? <div className="cart-count">{cartCount}</div> : null}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.items
  };
};

export default connect(mapStateToProps, null)(Header);
