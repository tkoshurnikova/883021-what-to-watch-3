import * as React from "react";
import VideoPlayer from "../video-player/video-player";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {Film} from "../../types";

interface Props {
  onCardHover: (film: Film) => void;
  onCardHoverOut: (film: {}) => void;
  film: Film,
  activeCard?: Film;
};

const MovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {film, onCardHover, onCardHoverOut, activeCard} = props;
  let timerForPreviewPlaying;

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
