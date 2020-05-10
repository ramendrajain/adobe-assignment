import React from "react";

const CartSummary = props => {
  let price = 0;
  let discount = 0;
  let quantity = 0;
  props.cart.forEach(item => {
    quantity += item.quantity
    price += item.price * item.quantity;
    discount += ((item.price * item.quantity * item.discount) / 100);
  });
  return (
    <div className="col-sm-4 price-list">
      <div className="pl-section">
        <h2>PRICE DETAILS</h2>
        <div>
          Price ({quantity} item) :<span> ₹{price}</span>
        </div>
        <div>
          Discount : <span>₹{discount}</span>
        </div>
        <div className="tpayment">
          Total Payable : <span>₹{price - discount}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
