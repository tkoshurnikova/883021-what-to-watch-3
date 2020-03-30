import {Genre, FilmsCount} from "../../const";
import {extend} from "../../utils";

const initialState = {
  genre: Genre.ALL_GENRES,
  cardsToShow: FilmsCount.MAIN_PAGE_FILMS,
  error: false
};

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RESET_CARDS_COUNT: `RESET_CARDS_COUNT`,
  REQUEST_FAIL: `REQUEST_FAIL`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: FilmsCount.MAIN_PAGE_FILMS
  }),
  resetCardsCount: () => ({
    type: ActionType.RESET_CARDS_COUNT,
  }),
  requestFail: () => ({
    type: ActionType.REQUEST_FAIL,
    payload: true
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        cardsToShow: state.cardsToShow + action.payload
      });

    case ActionType.RESET_CARDS_COUNT:
      return extend(state, {
        cardsToShow: FilmsCount.MAIN_PAGE_FILMS
      });

    case ActionType.REQUEST_FAIL:
      return extend(state, {
        error: action.payload
      });
  }

  return state;
};
