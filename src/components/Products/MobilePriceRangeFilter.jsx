import React from "react";
import Modal from "react-awesome-modal";

const MobileFilterByPrice = props => {
  return (
    <React.Fragment>
      <Modal
        visible={props.visibleFilterOption}
        width="280"
        effect="fadeInUp"
        onClickAway={() => props.closeFilterDialog()}
      >
        <div className="mob-price-sort">
          {props.children}
          <button
            className="btn btn-cancel"
            onClick={() => props.closeFilterDialog()}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default MobileFilterByPrice;
