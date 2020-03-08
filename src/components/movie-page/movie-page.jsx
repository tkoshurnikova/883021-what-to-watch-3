import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import films from "../../mocks/films.js";
import {TabName} from "../../const.js";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TabName.OVERVIEW
    };
    this._onTabClick = this._onTabClick.bind(this);
  }

  _onTabClick(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const {film, onCardClick} = this.props;
    const {activeTab} = this.state;

    const similarFilms = films.filter((item) => item.genre === film.genre && item.title !== film.title).slice(0, 4);

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
            <Header/>
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
                <Tabs
                  film={film}
                  activeTab={activeTab}
                  onTabClick={this._onTabClick}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList
              films={similarFilms}
              onCardClick={onCardClick}
            />
          </section>
          <Footer/>
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
