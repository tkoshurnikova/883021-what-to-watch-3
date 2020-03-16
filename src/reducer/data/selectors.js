import {createSelector} from "reselect";
import {Genre} from "../../const.js";
import {getGenre} from "../app/selectors.js";
import NameSpace from "../name-space.js";

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
