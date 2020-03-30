import {createSelector} from "reselect";
import {Genre} from "../../const";
import {getGenre} from "../app/selectors";
import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,
    (films, genre) => {
      return genre === Genre.ALL_GENRES ? films : films.filter((film) => film.genre === genre);
    }
);

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getFormBlock = (state) => {
  return state[NAME_SPACE].formBlock;
};

export const getSendingStatusText = (state) => {
  return state[NAME_SPACE].sendingStatusText;
};

export const getFavoriteFilms = (state) => {
  return state[NAME_SPACE].favoriteFilms;
};
