import {Genre, CARDS_TO_SHOW} from "./const.js";
import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  films,
  filteredFilms: films,
  genre: Genre.ALL_GENRES,
  cardsToShow: CARDS_TO_SHOW
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilmsByGenre: (genre, movies) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre === Genre.ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre)
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: CARDS_TO_SHOW
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

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        cardsToShow: state.cardsToShow + action.payload
      });
  }

  return state;
};
