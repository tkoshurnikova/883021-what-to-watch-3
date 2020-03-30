import * as React from "react";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import ShowMoreBtn from "../show-more-btn/show-more-btn";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeaderFilm from "../header-film/header-film";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getFilteredFilms} from "../../reducer/data/selectors";
import {getCardsToShow} from "../../reducer/app/selectors";
import {Film} from "../../types";
import {HeaderFilmType} from "../../const";

interface Props {
  PromoFilm: Film;
  filteredFilms: Film[];
  cardsToShow: number;
}

const WrappedMoviesList = withActiveItem(MoviesList);

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {PromoFilm, filteredFilms, cardsToShow} = props;

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
              page={HeaderFilmType.MAIN_PAGE}
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

const mapStateToProps = (state) => ({
  filteredFilms: getFilteredFilms(state),
  cardsToShow: getCardsToShow(state)
});

export {Main};
export default connect(mapStateToProps)(Main);
