import {reducer, ActionType} from "./data.js";
import {FilmDetails, films} from "../../mocks-for-tests.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: {}
  });
});

it(`Reducer should return films list`, () => {
  expect(reducer(
      {films: []},
      {type: ActionType.LOAD_FILMS, payload: films}
  )).toEqual({films});
});

it(`Reducer should return promo film`, () => {
  expect(reducer(
      {promoFilm: {}},
      {type: ActionType.LOAD_PROMO_FILM, payload: FilmDetails}
  )).toEqual({promoFilm: FilmDetails});
});
