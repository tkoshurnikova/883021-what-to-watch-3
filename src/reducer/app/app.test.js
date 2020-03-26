import {reducer, ActionType} from "./app.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    cardsToShow: 8,
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
