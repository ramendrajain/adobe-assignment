import { SET_SEARCH_TERM } from "../actions/search/search.actiontype";

export default function(
  state = {
    term: ""
  },
  action
) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload
      };

    default:
      return state;
  }
}
