import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus, AppRoute, HeaderFilmType, FavoriteFilmStatus} from "../../const";
import history from "../../history";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data";
import {Film} from "../../types";

interface Props {
  film: Film;
  authorizationStatus: AuthorizationStatus.AUTH | AuthorizationStatus.NO_AUTH;
  onFavoriteButtonClick: (film: Film, id: number, status: number) => void;
  page: HeaderFilmType.MAIN_PAGE | HeaderFilmType.MOVIE_PAGE;
}

const HeaderFilm: React.FunctionComponent<Props> = (props: Props) => {
  const {film, authorizationStatus, onFavoriteButtonClick, page} = props;
  const {name, genre, released, id, favorite} = film;

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
            if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
              history.push(AppRoute.LOGIN);
            } else {
              if (favorite) {
                onFavoriteButtonClick(film, id, FavoriteFilmStatus.REMOVE);
              } else {
                onFavoriteButtonClick(film, id, FavoriteFilmStatus.ADD);
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
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(film, id, status) {
    dispatch(DataOperation.changeFavoriteFilmsOnServer(id, status));
    dispatch(DataOperation.loadFavoriteFilms());
    dispatch(ActionCreator.changeFavoriteStatus(film));
  },
});

export {HeaderFilm};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilm);

