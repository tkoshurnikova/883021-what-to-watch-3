import {reducer, ActionType, ActionCreator} from "./app";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    cardsToShow: 8,
    error: false
  });
});

it(`Reducer should change genre`, () => {
  expect(reducer(
      {genre: `All genred`},
      {type: ActionType.CHANGE_GENRE, payload: `Drama`}
  )).toEqual({genre: `Drama`});
});

it(`Reducer should show more films`, () => {
  expect(reducer(
      {cardsToShow: 8},
      {type: ActionType.SHOW_MORE_FILMS, payload: 8}
  )).toEqual({cardsToShow: 16});
});

it(`Reducer should reset films count`, () => {
  expect(reducer(
      {cardsToShow: 16},
      {type: ActionType.RESET_CARDS_COUNT}
  )).toEqual({cardsToShow: 8});
});

it(`Reducer should change error status`, () => {
  expect(reducer(
      {error: false},
      {type: ActionType.REQUEST_FAIL, payload: true}
  )).toEqual({error: true});
});

it(`Action creator for changing genre should return correct action`, () => {
  expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: `Comedy`
  });
});

it(`Action creator for showing more films should return correct action`, () => {
  expect(ActionCreator.showMoreFilms()).toEqual({
    type: ActionType.SHOW_MORE_FILMS,
    payload: 8
  });
});

it(`Action creator for reseting films count should return correct action`, () => {
  expect(ActionCreator.resetCardsCount()).toEqual({
    type: ActionType.RESET_CARDS_COUNT
  });
});

it(`Action creator for changing error status should return correct action`, () => {
  expect(ActionCreator.requestFail()).toEqual({
    type: ActionType.REQUEST_FAIL,
    payload: true
  });
});
