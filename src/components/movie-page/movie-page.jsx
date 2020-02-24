import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import films from "../../mocks/films.js";

const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const SIMILAR_FILMS_LENGTH = 4;

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TabName.OVERVIEW
    };
  }

  _onTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {film, onCardClick} = this.props;
    const {activeTab} = this.state;

    const getSimilarFilms = () => {
      let similarFilms = films.filter((item) => item.genre === film.genre);

      if (similarFilms.length < SIMILAR_FILMS_LENGTH + 1) {
        const additionalFilmsLength = SIMILAR_FILMS_LENGTH + 1 - similarFilms.length;
        for (let i = 0; i < additionalFilmsLength; i++) {
          similarFilms.push(films[i]);
        }
      }

      const index = similarFilms.indexOf(film);
      similarFilms = [].concat(similarFilms.slice(0, index), similarFilms.slice(index + 1));

      return similarFilms;
    };

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src="img/bg-the-grand-budapest-hotel.jpg"
                alt="The Grand Budapest Hotel"
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <div className="user-block">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </div>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
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
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src="img/the-grand-budapest-hotel-poster.jpg"
                  alt="The Grand Budapest Hotel poster"
                  width={218}
                  height={327}
                />
              </div>
              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li
                      className="movie-nav__item movie-nav__item--active"
                      onClick={(evt) => {
                        this._onTabClick(TabName.OVERVIEW);
                        document.querySelector(`.movie-nav__item--active`).classList.remove(`movie-nav__item--active`);
                        evt.target.parentNode.classList.add(`movie-nav__item--active`);
                      }}
                    >
                      <a href="#" className="movie-nav__link">
                        Overview
                      </a>
                    </li>
                    <li
                      className="movie-nav__item"
                      onClick={(evt) => {
                        this._onTabClick(TabName.DETAILS);
                        document.querySelector(`.movie-nav__item--active`).classList.remove(`movie-nav__item--active`);
                        evt.target.parentNode.classList.add(`movie-nav__item--active`);
                      }}
                    >
                      <a href="#" className="movie-nav__link">
                        Details
                      </a>
                    </li>
                    <li
                      className="movie-nav__item"
                      onClick={(evt) => {
                        this._onTabClick(TabName.REVIEWS);
                        document.querySelector(`.movie-nav__item--active`).classList.remove(`movie-nav__item--active`);
                        evt.target.parentNode.classList.add(`movie-nav__item--active`);
                      }}
                    >
                      <a href="#" className="movie-nav__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <Tabs
                  film={film}
                  activeTab={activeTab}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList
              films={getSimilarFilms()}
              onCardClick={onCardClick}
            />
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
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

export default MoviePage;
