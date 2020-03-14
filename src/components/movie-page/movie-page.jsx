import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import films from "../../mocks/films.js";
import {TabName} from "../../const.js";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import HeaderFilm from "../header-film/header-film.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";

const WrappedMoviesList = withActiveItem(MoviesList);

const MoviePage = ({film, onCardClick, activeItem = TabName.OVERVIEW, onActiveItemChange, onPlayOrExitButtonClick, chosenFilm}) => {
  const similarFilms = films.filter((item) => item.genre === film.genre && item.title !== film.title).slice(0, 4);

  if (chosenFilm) {
    return (
      <FullscreenPlayer
        onPlayOrExitButtonClick={onPlayOrExitButtonClick}
        film={chosenFilm}
      />
    );
  }

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
            <HeaderFilm
              title={film.title}
              genre={film.genre}
              year={film.year}
              src={film.preview}
              onPlayOrExitButtonClick={onPlayOrExitButtonClick}
            />
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
            onCardClick={onCardClick}
          />
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

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
    year: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  onActiveItemChange: PropTypes.func.isRequired,
  onPlayOrExitButtonClick: PropTypes.func.isRequired,
  chosenFilm: PropTypes.string
};

export default MoviePage;
