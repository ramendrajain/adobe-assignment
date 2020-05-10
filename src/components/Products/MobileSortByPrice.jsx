import React, { useState } from "react";
import Modal from "react-awesome-modal";

const MobileSortBy = props => {
  const [sortType, setSortType] = useState("");

  const onSortTypeChange = e => {
    setSortType(e.target.value);
  };

  const sortProduct = e => {
    props.sortProductByPrice(sortType);
    props.closeSortDialog();
  };
  return (
    <React.Fragment>
      <Modal
        visible={props.visibleSortOption}
        width="280"
        effect="fadeInUp"
        onClickAway={() => props.closeSortDialog()}
      >
        <div className="mob-price-sort">
          <div className="sort-option">
            <h1>Sort Options</h1>
            <div>
              <label>
                <input
                  type="radio"
                  name="sortType"
                  value="HIGH_TO_LOW"
                  onChange={onSortTypeChange}
                />
                Price--High Low
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="sortType"
                  value="LOW_TO_HIGH"
                  onChange={onSortTypeChange}
                />
                Price--Low High
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="sortType"
                  value="DISCOUNT"
                  onChange={onSortTypeChange}
                />
                Discount
              </label>
            </div>
          </div>
        </div>
        <div className="actions">
          <div
            onClick={() => props.closeSortDialog()}
            className="action cancel"
          >
            Cancel
          </div>
          <div className="action" onClick={sortProduct}>
            Apply
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default MobileSortBy;
