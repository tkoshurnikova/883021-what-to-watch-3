import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";

interface Props {
  onShowMoreButtonClick: () => void;
}

const ShowMoreButton: React.FunctionComponent<Props> = (props: Props) => {
  const {onShowMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreButtonClick}
      >Show more</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {ShowMoreButton};
export default connect(null, mapDispatchToProps)(ShowMoreButton);
