import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";
import {getCardsToShow} from "../../reducer/app/selectors.js";

const MoviesList = ({films, onCardClick, cardsToShow, activeItem, onActiveItemChange}) => {
  const showedFilms = films.slice(0, cardsToShow);

  return (
    <div className="catalog__movies-list">
      {showedFilms.map((film) => (
        <MovieCard
          film={film}
          key={film.title}
          onCardHover={onActiveItemChange}
          onCardHoverOut={onActiveItemChange}
          onCardClick={onCardClick}
          activeCard={activeItem}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  cardsToShow: PropTypes.number.isRequired,
  activeItem: PropTypes.object,
  onActiveItemChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cardsToShow: getCardsToShow(state)
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
