import {reducer, ActionType, ActionCreator} from "./user";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    isAuthorized: false
  });
});

it(`Reducer should change authorization status`, () => {
  expect(reducer(
      {isAuthorized: false},
      {type: ActionType.REQUIRED_AUTHORIZATION, payload: true}
  )).toEqual({isAuthorized: true});
});

it(`Action creator for requiring authorization should return correct action`, () => {
  expect(ActionCreator.requireAuthorization(true)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: true
  });
});
