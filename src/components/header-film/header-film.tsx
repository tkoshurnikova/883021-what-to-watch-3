import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import {AppRoute, HeaderFilmType, FavoriteFilmStatus} from "../../const";
import history from "../../history";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Film} from "../../types";

interface Props {
  film: Film;
  isAuthorized: boolean;
  onFavoriteButtonClick: (id: number, status: number) => void;
  page: HeaderFilmType.MAIN_PAGE | HeaderFilmType.MOVIE_PAGE;
  favoriteFilms?: Film[];
}

const HeaderFilm: React.FunctionComponent<Props> = (props: Props) => {
  const {film, isAuthorized, onFavoriteButtonClick, page, favoriteFilms} = props;
  const {name, genre, released, id} = film;
  let {favorite} = film;

  if (favoriteFilms.length > 0) {
    favoriteFilms.map((item) => {
      if (item.id === id) {
        favorite = true;
      } else {
        favorite = false;
      }
    });
  }

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <div className="movie-card__buttons">
        <Link
          to={`${AppRoute.PLAYER}/${id}`}
          className="btn btn--play movie-card__button"
          type="button"
        >
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </Link>
        <button
          className="btn btn--list movie-card__button"
          type="button"
          onClick={() => {
            if (!isAuthorized) {
              history.push(AppRoute.LOGIN);
            } else {
              if (favorite) {
                onFavoriteButtonClick(id, FavoriteFilmStatus.REMOVE);
              } else {
                onFavoriteButtonClick(id, FavoriteFilmStatus.ADD);
              }
            }
          }}
        >
          {favorite ?
            <svg viewBox="0 0 18 14" width={18} height={14}>
              <use xlinkHref="#in-list" />
            </svg>
            :
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
          }

          <span>My list</span>
        </button>
        {page === HeaderFilmType.MOVIE_PAGE ?
          <Link to={`${AppRoute.FILMS}/${id}/review`} className="btn movie-card__button">
            Add review
          </Link>
          :
          ``
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  favoriteFilms: getFavoriteFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.changeFavoriteFilms(id, status));
    dispatch(DataOperation.loadFavoriteFilms());
  },
});

export {HeaderFilm};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilm);

