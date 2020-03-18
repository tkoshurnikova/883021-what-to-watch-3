import {extend} from "../../utils.js";
import dataAdapter from "./adapter.js";

const initialState = {
  films: [],
  promoFilm: {}
};

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
};

export const ActionCreator = {
  loadFilms: (movies) => ({
    type: ActionType.LOAD_FILMS,
    payload: movies
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  })
};

export const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedData = dataAdapter(response.data);
        dispatch(ActionCreator.loadFilms(adaptedData));
      });
  },
  loadPromoFilm: () => (dispatch, _, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
  }

  return state;
};

