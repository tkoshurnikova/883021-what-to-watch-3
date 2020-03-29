import {reducer, ActionType, ActionCreator} from "./data.js";
import {FilmDetails, films} from "../../mocks-for-tests.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: {},
    formBlock: false,
    sendingStatusText: ``,
    favoriteFilms: []
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

it(`Reducer should load favorite films`, () => {
  expect(reducer(
      {favoriteFilms: []},
      {type: ActionType.LOAD_FAVORITE_FILMS, payload: films[0]}
  )).toEqual({favoriteFilms: films[0]});
});

it(`Action creator for loading films should return correct action`, () => {
  expect(ActionCreator.loadFilms(films)).toEqual({
    type: ActionType.LOAD_FILMS,
    payload: films
  });
});

it(`Action creator for loading promo film should return correct action`, () => {
  expect(ActionCreator.loadPromoFilm(FilmDetails)).toEqual({
    type: ActionType.LOAD_PROMO_FILM,
    payload: FilmDetails
  });
});

it(`Action creator for changing from block should return correct action`, () => {
  expect(ActionCreator.changeFormBlock(true)).toEqual({
    type: ActionType.CHANGE_FORM_BLOCK,
    payload: true
  });
});

it(`Action creator for sending text should return correct action`, () => {
  expect(ActionCreator.setSendingStatusText(`Hello`)).toEqual({
    type: ActionType.SET_SENDING_STATUS_TEXT,
    payload: `Hello`
  });
});

it(`Action creator for loading favorite films should return correct action`, () => {
  expect(ActionCreator.loadFavoriteFilms(films[0])).toEqual({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films[0]
  });
});

it(`Action creator for changing favourite films should return correct action`, () => {
  expect(ActionCreator.changeFavoriteFilmsOnServer(3)).toEqual({
    type: ActionType.CHANGE_FAVORITE_FILMS_ON_SERVER,
    payload: 3
  });
});

it(`Action creator for changing favourite status should return correct action`, () => {
  expect(ActionCreator.changeFavoriteStatus(5)).toEqual({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: 5
  });
});


