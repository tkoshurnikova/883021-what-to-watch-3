import {Genre, CARDS_TO_SHOW} from "./const.js";
import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  films,
  filteredFilms: films,
  genre: Genre.ALL_GENRES,
  cardsToShow: CARDS_TO_SHOW,
  clickedCard: null,
  chosenFilm: null
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RESET_CARDS_COUNT: `RESET_CARDS_COUNT`,
  SET_CLICKED_CARD: `SET_CLICKED_CARD`,
  SET_CHOSEN_FILM: `SET_CHOSEN_FILM`
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
  }),
  resetCardsCount: () => ({
    type: ActionType.RESET_CARDS_COUNT,
  }),
  setClickedCard: (clickedCard) => ({
    type: ActionType.SET_CLICKED_CARD,
    payload: clickedCard
  }),
  setChosenFilm: (chosenFilm) => ({
    type: ActionType.SET_CHOSEN_FILM,
    payload: chosenFilm
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

    case ActionType.RESET_CARDS_COUNT:
      return extend(state, {
        cardsToShow: CARDS_TO_SHOW
      });

    case ActionType.SET_CLICKED_CARD:
      return extend(state, {
        clickedCard: action.payload
      });

    case ActionType.SET_CHOSEN_FILM:
      return extend(state, {
        chosenFilm: action.payload
      });
  }

  return state;
};
