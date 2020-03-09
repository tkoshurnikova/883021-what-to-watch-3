import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import {connect} from "react-redux";

class MoviesList extends PureComponent {
  render() {
    const {films, onCardClick, cardsToShow, activeItem, onActiveItemChange} = this.props;
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
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  cardsToShow: PropTypes.number.isRequired,
  activeItem: PropTypes.object,
  onActiveItemChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cardsToShow: state.cardsToShow
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
