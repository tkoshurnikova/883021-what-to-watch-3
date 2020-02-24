import React from "react";
import PropTypes from "prop-types";

const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const getFilmRatingDescription = (rating) => {
  let ratingDescription = ``;
  switch (true) {
    case (rating >= 0 && rating < 3): ratingDescription = `Bad`; break;
    case (rating >= 3 && rating < 5): ratingDescription = `Normal`; break;
    case (rating >= 5 && rating < 8): ratingDescription = `Good`; break;
    case (rating >= 8 && rating < 10): ratingDescription = `Very good`; break;
    case (rating === 10): ratingDescription = `Awesome`; break;
  }
  return ratingDescription;
};

const Tabs = ({film, activeTab}) => {
  let returnFragment;

  switch (activeTab) {
    case TabName.OVERVIEW:
      returnFragment =
        (<React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating.toFixed(1)}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{getFilmRatingDescription(film.rating)}</span>
              <span className="movie-rating__count">{film.numberOfVotes} ratings</span>
            </p>
          </div>
          <div className="movie-card__text">
            <p>
              {film.description}
            </p>
            <p className="movie-card__director">
              <strong>Director: {film.director}</strong>
            </p>
            <p className="movie-card__starring">
              <strong>
                Starring: {film.actors} and
                other
              </strong>
            </p>
          </div>
        </React.Fragment>);
      break;
    case TabName.DETAILS:
      returnFragment =
        (<React.Fragment>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{film.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {film.actors}
                </span>
              </p>
            </div>
          </div>
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">1h 39m</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{film.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{film.year}</span>
            </p>
          </div>
        </React.Fragment>);
      break;
    case TabName.REVIEWS:
      returnFragment =
        (<div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director{`'`}s funniest and most exquisitely designed movies in years.</p>
                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>
              <div className="review__rating">8,9</div>
            </div>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Anderson{`'`}s films are too precious for some, but for those of us willing to lose ourselves in them, they{`'`}re a delight. {`"`}The Grand Budapest Hotel{`"`} is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>
                <footer className="review__details">
                  <cite className="review__author">Bill Goodykoontz</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>
              <div className="review__rating">8,0</div>
            </div>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">I didn{`'`}t find it amusing, and while I can appreciate the creativity, it{`'`}s an hour and 40 minutes I wish I could take back.</p>
                <footer className="review__details">
                  <cite className="review__author">Amanda Greever</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>
              <div className="review__rating">8,0</div>
            </div>
          </div>
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>
                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>
              <div className="review__rating">7,2</div>
            </div>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>
              <div className="review__rating">7,6</div>
            </div>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>
              <div className="review__rating">7,0</div>
            </div>
          </div>
        </div>);
      break;
  }
  return returnFragment;
};

Tabs.propTypes = {
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
  activeTab: PropTypes.string.isRequired
};

export default Tabs;
