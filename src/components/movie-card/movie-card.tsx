import * as React from "react";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import {AppRoute, TRAILER_DELAY} from "../../const";
import {Film} from "../../types";

interface Props {
  onCardHover: (film: Film) => void;
  onCardHoverOut: (film: {}) => void;
  film: Film;
  activeCard?: Film;
  loadReviews?: (film: {}) => void;
}

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {film, onCardHover, onCardHoverOut, activeCard, loadReviews} = props;
  let timerForPreviewPlaying;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        timerForPreviewPlaying = setTimeout(() => {
          onCardHover(film);
        }, TRAILER_DELAY);
      }}
      onMouseOut={() => {
        clearTimeout(timerForPreviewPlaying);
        onCardHoverOut({});
      }}
      onClick={() => {
        clearTimeout(timerForPreviewPlaying);
        loadReviews(film);
      }}
    >
      <Link to={`${AppRoute.FILMS}/${film.id}`}>
        <div className="small-movie-card__image">
          {(activeCard === film)
            ? <VideoPlayer
              film={film}
              isPlaying={activeCard === film}
            />
            : <img src={film.image} alt={film.name} width="280" height="175" />}
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${AppRoute.FILMS}/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
};

export default MovieCard;
