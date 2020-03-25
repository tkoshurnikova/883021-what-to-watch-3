import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../const.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import history from "../../history.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const HeaderFilm = ({film, authorizationStatus, onFavoriteButtonClick}) => {
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
                onFavoriteButtonClick(id, 0);
              } else {
                onFavoriteButtonClick(id, 1);
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
        {(authorizationStatus === AuthorizationStatus.AUTH)
          ?
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

HeaderFilm.propTypes = {
  film: PropTypes.object.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(id, status));
  },
});

export {HeaderFilm};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderFilm);

