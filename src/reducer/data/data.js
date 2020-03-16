import {extend} from "../../utils.js";
// import films from "../../mocks/films.js";
import dataAdapter from "./adapter.js";

const initialState = {
  films: []
};

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`
};

export const ActionCreator = {
  loadFilms: (movies) => ({
    type: ActionType.LOAD_FILMS,
    payload: movies
  })
};

export const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedData = dataAdapter(response.data);
        dispatch(ActionCreator.loadFilms(adaptedData));
      });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
  }

  return state;
};

