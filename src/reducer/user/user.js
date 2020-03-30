import {extend} from "../../utils";
import {AuthorizationStatus} from "../../const";
import history from "../../history";
import {Operation as DataOperation} from "../data/data";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};

export const Operation = {
  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(DataOperation.loadFavoriteFilms());
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        history.goBack();
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload
      });
  }

  return state;
};
