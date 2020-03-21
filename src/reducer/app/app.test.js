import {reducer, ActionType} from "./app.js";
import {films} from "../../mocks-for-tests.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    cardsToShow: 8,
    clickedCard: null,
    chosenFilm: null
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

it(`Reduer should set clicked card to state`, () => {
  expect(reducer(
      {clickedCard: null},
      {type: ActionType.SET_CLICKED_CARD, payload: films[0]}
  )).toEqual({clickedCard: films[0]});
});

it(`Reducer should set film to watch to state`, () => {
  expect(reducer(
      {chosenFilm: null},
      {type: ActionType.SET_CHOSEN_FILM, payload: films[1]}
  )).toEqual({chosenFilm: films[1]});
});
