import {
  ADDED_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_CART_ITEM
} from "./cart.actiontype";

export const addToCart = (product, cart) => {
  const itemIndex = cart.findIndex(item => item.id === product.id);
  if (itemIndex >= 0) {
    return { type: INCREASE_QUANTITY, payload: product.id };
  }
  return { type: ADDED_TO_CART, payload: { ...product, quantity: 1 } };
};

export const increaseItemQuantity = productId => {
  return { type: INCREASE_QUANTITY, payload: productId };
};

export const decreaseItemQuantity = productId => {
  return { type: DECREASE_QUANTITY, payload: productId };
};

export const removeItemFromCart = productId => {
  return { type: REMOVE_CART_ITEM, payload: productId };
};
