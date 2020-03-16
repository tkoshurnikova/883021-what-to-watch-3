import {extend} from "../../utils.js";
import films from "../../mocks/films.js";

const initialState = {
  films
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
  }

  return state;
};

