import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onCardHover, onCardHoverOut, onCardClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onCardHover(film);
        }}
        onMouseOut={onCardHoverOut}
        onClick={() => onCardClick(film)}
      >
        <div className="small-movie-card__image">
          <img src={film.image} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            onClick={(evt) => {
              evt.preventDefault();
              onCardClick(film);
            }}
            href="movie-page">
            {film.title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onCardHover: PropTypes.func.isRequired,
  onCardHoverOut: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numberOfVotes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MovieCard;
