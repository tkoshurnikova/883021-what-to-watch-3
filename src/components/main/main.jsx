import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import MoviesList from "../movies-list/movies-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMoreBtn from "../show-more-btn/show-more-btn.jsx";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";

const Main = ({PromoFilm, filteredFilms, cardsToShow, onCardClick}) => {

  return (
    <React.Fragment>
      <section className="movie-card">

        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{PromoFilm.NAME}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{PromoFilm.GENRE}</span>
                <span className="movie-card__year">{PromoFilm.RELEASE_DATE}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>
          <MoviesList
            films={filteredFilms}
            onCardClick={onCardClick}
          />
          {cardsToShow >= filteredFilms.length || <ShowMoreBtn/>}

        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  PromoFilm: PropTypes.object.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  cardsToShow: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  cardsToShow: state.cardsToShow
});

export {Main};
export default connect(mapStateToProps)(Main);
