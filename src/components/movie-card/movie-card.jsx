import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onCardHover, onCardHoverOut} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onCardHover(film);
        }}
        onMouseOut={onCardHoverOut}
      >
        <div className="small-movie-card__image">
          <img src={film.image} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html">
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
    image: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
