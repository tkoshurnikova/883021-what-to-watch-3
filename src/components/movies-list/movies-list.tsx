import * as React from "react";
import MovieCard from "../movie-card/movie-card";
import {connect} from "react-redux";
import {getCardsToShow} from "../../reducer/app/selectors";
import {Film} from "../../types";

interface Props {
  films: Film[];
  cardsToShow: number;
  activeItem?: Film;
  onActiveItemChange: () => void;
};

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {
  const {films, cardsToShow, activeItem, onActiveItemChange} = props
  const showedFilms = films.slice(0, cardsToShow);

  return (
    <div className="catalog__movies-list">
      {showedFilms.map((film) => (
        <MovieCard
          film={film}
          key={film.name}
          onCardHover={onActiveItemChange}
          onCardHoverOut={onActiveItemChange}
          activeCard={activeItem}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardsToShow: getCardsToShow(state)
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
