import {
  ADDED_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_CART_ITEM
} from "../actions/cart/cart.actiontype";

export default function(
  state = {
    items: []
  },
  action
) {
  let updatedItems = [];
  switch (action.type) {
    case ADDED_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case INCREASE_QUANTITY:
      updatedItems = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };

    case DECREASE_QUANTITY:
      updatedItems = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };

    case REMOVE_CART_ITEM:
      updatedItems = state.items.filter(item => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        items: updatedItems
      };

    default:
      return state;
  }
}
