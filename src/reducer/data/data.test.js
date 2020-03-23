import {reducer, ActionType} from "./data.js";
import {FilmDetails, films} from "../../mocks-for-tests.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: {},
    formBlock: false,
    sendingStatusText: ``
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

it(`Reducer should change form block`, () => {
  expect(reducer(
      {formBlock: false},
      {type: ActionType.CHANGE_FORM_BLOCK, payload: true}
  )).toEqual({formBlock: true});
});

it(`Reducer should change sending status`, () => {
  expect(reducer(
      {sendingStatusText: ``},
      {type: ActionType.SET_SENDING_STATUS_TEXT, payload: `Sending...`}
  )).toEqual({sendingStatusText: `Sending...`});
});
