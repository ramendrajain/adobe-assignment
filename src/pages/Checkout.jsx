import React from "react";
import { connect } from "react-redux";

import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart
} from "../store/actions/cart/cart.action";
import CartSummary from "../components/Checkout/CartSummary";
import CartItems from "../components/Checkout/CartItems";

import "../style/checkout.scss";

const Checkout = props => {
  return (
    <div className="container-fluid">
      {props.cart.length > 0 ? (
        <div className="row checkout-cart">
          <CartItems
            cart={props.cart}
            increaseItemQuantity={props.increaseItemQuantity}
            decreaseItemQuantity={props.decreaseItemQuantity}
            removeItemFromCart={props.removeItemFromCart}
          />
          <CartSummary cart={props.cart} />
        </div>
      ) : (
        <h1 className="not-selected">No Item in cart</h1>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart.items
  };
};

const mapDispatchToProps = {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
