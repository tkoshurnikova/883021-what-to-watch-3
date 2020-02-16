import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardWithHover: null
    };

    this._onCardHover = this._onCardHover.bind(this);
    this._onCardHoverOut = this._onCardHoverOut.bind(this);
  }

  _onCardHover(film) {
    this.setState({
      cardWithHover: film
    });
  }

  _onCardHoverOut() {
    this.setState({
      cardWithHover: null
    });
  }

  render() {
    const {films, onCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <MovieCard
            film={film}
            key={film.title}
            onCardHover={this._onCardHover}
            onCardHoverOut={this._onCardHoverOut}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
