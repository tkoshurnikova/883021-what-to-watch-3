import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
// import films from "../../mocks/films.js";
import {getFilms} from "../../reducer/data/selectors.js";
import {connect} from 'react-redux';
import {TabName} from "../../const.js";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import HeaderFilm from "../header-film/header-film.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";
import withFulscreenVideo from "../../hocs/with-fullscreen-video/with-fullscreen-video.jsx";

const WrappedMoviesList = withActiveItem(MoviesList);
const WrappedFulscreenPlayer = withFulscreenVideo(FullscreenPlayer);

const MoviePage = ({film, onCardClick, activeItem = TabName.OVERVIEW, onActiveItemChange, onPlayOrExitButtonClick, chosenFilm, films}) => {
  const similarFilms = films.filter((item) => item.genre === film.genre && item.title !== film.title).slice(0, 4);

  if (chosenFilm) {
    return (
      <WrappedFulscreenPlayer
        onPlayOrExitButtonClick={onPlayOrExitButtonClick}
        film={chosenFilm}
      />
    );
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${film.background_color}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={film.background_image}
              alt={film.title}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="movie-card__wrap">
            <HeaderFilm
              film={film}
              onPlayOrExitButtonClick={onPlayOrExitButtonClick}
            />
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.poster_image}
                alt={film.title}
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
    "title": PropTypes.string.isRequired,
    "image": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "rating": PropTypes.number.isRequired,
    "numberOfVotes": PropTypes.number.isRequired,
    "director": PropTypes.string.isRequired,
    "actors": PropTypes.array.isRequired,
    "genre": PropTypes.string.isRequired,
    "year": PropTypes.number.isRequired,
    "preview": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  onActiveItemChange: PropTypes.func.isRequired,
  onPlayOrExitButtonClick: PropTypes.func.isRequired,
  chosenFilm: PropTypes.object,
  films: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
