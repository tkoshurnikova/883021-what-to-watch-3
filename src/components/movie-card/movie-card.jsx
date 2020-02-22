import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPreviewPlaying: false
    };
  }

  render() {
    const {film, onCardHover, onCardHoverOut, onCardClick} = this.props;
    let timerForPreviewPlaying = () => {};

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onCardHover(film);

          timerForPreviewPlaying = setTimeout(() => {
            this.setState({
              isPreviewPlaying: true
            });
          }, 1000);
        }}
        onMouseOut={() => {
          onCardHoverOut();

          clearTimeout(timerForPreviewPlaying);
          this.setState({
            isPreviewPlaying: false
          });
        }}
        onClick={() => onCardClick(film)}
      >
        <div className="small-movie-card__image">
          {(this.state.isPreviewPlaying)
            ? <VideoPlayer
              film={film}
              isPlaying={this.state.isPreviewPlaying}
            />
            : <img src={film.image} alt={film.title} width="280" height="175" />}
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
    year: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MovieCard;
