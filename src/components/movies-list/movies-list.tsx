import * as React from "react";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {getCardsToShow} from "../../reducer/app/selectors";
import {Operation as DataOperations} from "../../reducer/data/data";
import {Film} from "../../types";

interface Props {
  films: Film[];
  cardsToShow: number;
  activeItem?: Film;
  onActiveItemChange: () => void;
  loadReviews?: (film: {}) => void;
}

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {
  const {films, cardsToShow, activeItem, onActiveItemChange, loadReviews} = props;
  const showedFilms = films.slice(0, cardsToShow);

  return (
    <div className="catalog__movies-list">
      {showedFilms.map((film) => (
        <MovieCard
          film={film}
          key={film.id}
          onCardHover={onActiveItemChange}
          onCardHoverOut={onActiveItemChange}
          activeCard={activeItem}
          loadReviews={loadReviews}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardsToShow: getCardsToShow(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(item) {
    dispatch(DataOperations.loadReviews(item));
  }
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
