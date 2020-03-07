import {Genre} from "./const.js";
import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  films,
  filteredFilms: films,
  genre: Genre.ALL_GENRES,
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilmsByGenre: (genre, movies) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre === Genre.ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre)
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.GET_FILMS_BY_GENRE:
      return extend(state, {
        filteredFilms: action.payload
      });
  }

  return state;
};
