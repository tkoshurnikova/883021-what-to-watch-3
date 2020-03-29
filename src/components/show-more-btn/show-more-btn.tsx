import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";

interface Props {
  onShowMoreBtnClick: () => void;
};

const ShowMoreBtn: React.FunctionComponent<Props> = (props: Props) => {
  const {onShowMoreBtnClick} = props;

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

const mapDispatchToProps = (dispatch) => ({
  onShowMoreBtnClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ShowMoreBtn};
export default connect(null, mapDispatchToProps)(ShowMoreBtn);
