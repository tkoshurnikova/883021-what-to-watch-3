import * as React from "react";
import * as moment from "moment";
import {TabName} from "../../const";
import {Film} from "../../types";

type Tab = TabName.OVERVIEW | TabName.DETAILS | TabName.REVIEWS;

interface Props {
  film: Film;
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
}

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

class Tabs extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  _getNavigationItem(tab) {
    const {onTabClick} = this.props;

    return (
      <li
        key={tab}
        className="movie-nav__item movie-nav__item"
        onClick={(evt) => {
          onTabClick(tab);
          if (document.querySelector(`.movie-nav__item--active`)) {
            document.querySelector(`.movie-nav__item--active`).classList.remove(`movie-nav__item--active`);
          }
          // evt.target.parentNode.classList.add(`movie-nav__item--active`);
        }}
      >
        <a href="#" className="movie-nav__link">
          {tab}
        </a>
      </li>
    );
  }

  _getNavigation() {
    const tabNames = Object.values(TabName);
    const navigationItems = tabNames.map((tab) => this._getNavigationItem(tab));

    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {navigationItems}
        </ul>
      </nav>
    );
  }

  render() {
    const navigation = this._getNavigation();
    const {film, activeTab} = this.props;

    return (
      <React.Fragment>
        {navigation}
        {activeTab === TabName.OVERVIEW && (
          <React.Fragment>
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
                  Starring: {film.actors.map((actor) => {
                    return actor;
                  }).join(`,\n`)} and other
                </strong>
              </p>
            </div>
          </React.Fragment>
        )}

        {activeTab === TabName.DETAILS && (
          <React.Fragment>
            <div className="movie-card__text movie-card__row">
              <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Director</strong>
                  <span className="movie-card__details-value">{film.director}</span>
                </p>
                <p className="movie-card__details-item">
                  <strong className="movie-card__details-name">Starring</strong>
                  <span className="movie-card__details-value">
                    {film.actors.map((actor) => {
                      return actor;
                    }).join(`,\n`)}
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
                <span className="movie-card__details-value">{film.released}</span>
              </p>
            </div>
          </React.Fragment>
        )}

        {activeTab === TabName.REVIEWS && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {film.reviews.map((review) => (
                <div className="review" key={review.id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.author.name}</cite>
                      <time className="review__date" dateTime={review.date}>{moment(review.date).format(`MMMM D, YYYY`)}</time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Tabs;
