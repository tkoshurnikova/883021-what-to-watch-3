import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import {getFilms} from "../../reducer/data/selectors.js";
import {connect} from 'react-redux';
import {TabName} from "../../const.js";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import HeaderFilm from "../header-film/header-film.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const WrappedMoviesList = withActiveItem(MoviesList);

const MoviePage = ({film, activeItem = TabName.OVERVIEW, onActiveItemChange, films}) => {
  const similarFilms = films.filter((item) => item.genre === film.genre && item.name !== film.name).slice(0, 4);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${film.background_color}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={film.background_image}
              alt={film.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="movie-card__wrap">
            <HeaderFilm
              film={film}
            />
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.poster_image}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
            <div className="movie-card__desc">
              <Tabs
                film={film}
                activeTab={activeItem}
                onTabClick={onActiveItemChange}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <WrappedMoviesList
            films={similarFilms}
          />
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  film: PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired
  }).isRequired,
  activeItem: PropTypes.string,
  onActiveItemChange: PropTypes.func.isRequired,
  chosenFilm: PropTypes.object,
  films: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
