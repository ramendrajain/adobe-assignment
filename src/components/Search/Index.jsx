import React from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../../store/actions/search/search.action";
import { debounce } from "../../utils/product.util";

const Search = props => {
  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const setSearchTerm = debounce(props.setSearchTerm, 200);

  return (
    <div className="search-container">
      <input type="text" placeholder="Search" onChange={handleInputChange} />
      <span className="glyphicon glyphicon-search" />
    </div>
  );
};

const mapDispatchToProps = {
  setSearchTerm
};

export default connect(null, mapDispatchToProps)(Search);
