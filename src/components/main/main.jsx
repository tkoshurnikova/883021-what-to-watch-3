import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import MoviesList from "../movies-list/movies-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMoreBtn from "../show-more-btn/show-more-btn.jsx";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import HeaderFilm from "../header-film/header-film.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import {getFilteredFilms} from "../../reducer/data/selectors.js";
import {getCardsToShow} from "../../reducer/app/selectors.js";

const WrappedMoviesList = withActiveItem(MoviesList);

const Main = ({PromoFilm, filteredFilms, cardsToShow}) => {
  return (
    <React.Fragment>
      <section className="movie-card">

        <div className="movie-card__bg">
          <img src={PromoFilm.background_image} alt={PromoFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={PromoFilm.poster_image} alt={PromoFilm.name} width="218" height="327" />
            </div>
            <HeaderFilm
              film={PromoFilm}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>
          <WrappedMoviesList
            films={filteredFilms}
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
  cardsToShow: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: getFilteredFilms(state),
  cardsToShow: getCardsToShow(state)
});

export {Main};
export default connect(mapStateToProps)(Main);
