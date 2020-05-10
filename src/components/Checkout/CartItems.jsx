import React from "react";

import { calculateDiscountPrice } from "../../utils/product.util";

const CartItems = props => {
  return (
    <div className="col-sm-8 product-list">
      {props.cart.map(product => (
        <div className="pd-section" key={product.id}>
          <div className="fcnt">
            <img
              className="img-responsive"
              src={product.img_url}
              alt="product"
            />
          </div>

          <div className="scnt">
            <div>{product.name} </div>
            <div className="tcnt">
              <div className="cart-sum">
                <div className="itemprice">
                  <div>
                    <div className="itempric">
                      ₹
                      {calculateDiscountPrice(product.price, product.discount) *
                        product.quantity}
                    </div>
                    <s>{product.price * product.quantity}</s>
                  </div>
                  <div className="discnt">{product.discount}% off</div>
                </div>
              </div>
              <div className="cart-sum">
                <div className="productupdate">
                  <span
                    onClick={() => props.decreaseItemQuantity(product.id)}
                    className={`glyphicon glyphicon-minus-sign ${product.quantity <= 1 ? 'pointer-none' : ''}` }
                  ></span>
                  <input type="text" value={product.quantity} size="2" />
                  <span
                    onClick={() => props.increaseItemQuantity(product.id)}
                    className="glyphicon glyphicon-plus-sign"
                  ></span>
                </div>
              </div>
              <div
                className="cart-sum remove"
                onClick={() => props.removeItemFromCart(product.id)}
              >
                REMOVE
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
