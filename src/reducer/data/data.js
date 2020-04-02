import {extend, getFilmByID} from "../../utils";
import dataAdapter, {commentsAdapter} from "./adapter";
import history from "../../history";

const initialState = {
  films: [],
  promoFilm: {},
  formBlock: false,
  sendingStatusText: ``,
  favoriteFilms: []
};

export const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_FORM_BLOCK: `CHANGE_BLOCK_FORM`,
  SET_SENDING_STATUS_TEXT: `SET_SENDING_STATUS_TEXT`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  CHANGE_FAVORITE_FILMS_ON_SERVER: `CHANGE_FAVORITE_FILMS_ON_SERVER`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`
};

export const ActionCreator = {
  loadFilms: (movies) => ({
    type: ActionType.LOAD_FILMS,
    payload: movies
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  }),
  changeFormBlock: (status) => ({
    type: ActionType.CHANGE_FORM_BLOCK,
    payload: status
  }),
  setSendingStatusText: (text) => ({
    type: ActionType.SET_SENDING_STATUS_TEXT,
    payload: text
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films
  }),
  changeFavoriteFilmsOnServer: (id) => ({
    type: ActionType.CHANGE_FAVORITE_FILMS_ON_SERVER,
    payload: id
  }),
  changeFavoriteStatus: (film) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS,
    payload: film
  })
};

export const Operation = {
  loadReviews: (item) => (dispatch, _, api) => {
    return api.get(`/comments/${item.id}`)
    .then((response) => {
      item.reviews = response.data.map(((review) => commentsAdapter(review)));
    });
  },

  loadFilms: () => (dispatch, _, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedData = dataAdapter(response.data);
        dispatch(ActionCreator.loadFilms(adaptedData));
      });
  },

  loadPromoFilm: () => (dispatch, _, api) => {
    return api.get(`films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },

  sendReview: (authData, id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.changeFormBlock(true));
    dispatch(ActionCreator.setSendingStatusText(`Sending...`));

    return api.post(`/comments/${id}`, {
      rating: authData.rating,
      comment: authData.comment
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.setSendingStatusText(`Comment was sent`));
          dispatch(Operation.loadReviews(getFilmByID(getState().DATA.films, id)));
          history.push(`/films/${id}`);
        } else {
          dispatch(ActionCreator.setSendingStatusText(`Something went wrong, please try again`));
        }
        dispatch(ActionCreator.changeFormBlock(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setSendingStatusText(`Something went wrong, please try again`));
        dispatch(ActionCreator.changeFormBlock(false));
      });
  },

  loadFavoriteFilms: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const adaptedData = dataAdapter(response.data);
        dispatch(ActionCreator.loadFavoriteFilms(adaptedData));
      });
  },

  changeFavoriteFilmsOnServer: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.changeFavoriteStatus(response.data.id));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });

    case ActionType.CHANGE_FORM_BLOCK:
      return extend(state, {
        formBlock: action.payload
      });

    case ActionType.SET_SENDING_STATUS_TEXT:
      return extend(state, {
        sendingStatusText: action.payload
      });

    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });

    case ActionType.CHANGE_FAVORITE_STATUS:
      return extend(state, {
        films: state.films.map((item) => {
          if (item.id === action.payload.id) {
            return extend(item, {favorite: !item.favorite});
          }
          return item;
        }),
        promoFilm: extend(state.promoFilm, {
          favorite: state.promoFilm.id === action.payload.id ? !state.promoFilm.favorite : state.promoFilm.favorite
        })
      });
  }

  return state;
};
