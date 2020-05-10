import { SET_SEARCH_TERM } from "./search.actiontype";

export const setSearchTerm = searchTerm => {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
};
