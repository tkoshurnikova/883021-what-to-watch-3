import {reducer, ActionType, ActionCreator} from "./user";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: `NO_AUTH`
  });
});

it(`Reducer should change authorization status`, () => {
  expect(reducer(
      {authorizationStatus: `NO_AUTH`},
      {type: ActionType.REQUIRED_AUTHORIZATION, payload: `AUTH`}
  )).toEqual({authorizationStatus: `AUTH`});
});

it(`Action creator for requiring authorization should return correct action`, () => {
  expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: `AUTH`
  });
});
