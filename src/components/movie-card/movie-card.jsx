import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({film, onCardHover, onCardHoverOut, onCardClick, activeCard}) => {
  let timerForPreviewPlaying = () => {};

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        timerForPreviewPlaying = setTimeout(() => {
          onCardHover(film);
        }, 1000);
      }}
      onMouseOut={() => {
        clearTimeout(timerForPreviewPlaying);
        onCardHoverOut({});
      }}
      onClick={() => onCardClick(film)}
    >
      <div className="small-movie-card__image">
        {(activeCard === film)
          ? <VideoPlayer
            film={film}
            isPlaying={activeCard === film}
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
};

MovieCard.propTypes = {
  onCardHover: PropTypes.func.isRequired,
  onCardHoverOut: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeCard: PropTypes.object
};

export default MovieCard;
