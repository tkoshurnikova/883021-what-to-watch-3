import React from "react";
import PropTypes from "prop-types";

const HeaderFilm = ({film, onPlayOrExitButtonClick}) => {
  const {title, genre, year} = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>
      <div className="movie-card__buttons">
        <button
          className="btn btn--play movie-card__button"
          type="button"
          onClick={() => {
            onPlayOrExitButtonClick(film);
          }}
        >
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>
          <span>My list</span>
        </button>
        <a href="add-review.html" className="btn movie-card__button">
          Add review
        </a>
      </div>
    </div>
  );
};

HeaderFilm.propTypes = {
  film: PropTypes.object.isRequired,
  onPlayOrExitButtonClick: PropTypes.func.isRequired
};

export default HeaderFilm;
