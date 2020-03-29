import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";

const ShowMoreBtn = ({onShowMoreBtnClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreBtnClick}
      >Show more</button>
    </div>
  );
};

ShowMoreBtn.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreBtnClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ShowMoreBtn};
export default connect(null, mapDispatchToProps)(ShowMoreBtn);
