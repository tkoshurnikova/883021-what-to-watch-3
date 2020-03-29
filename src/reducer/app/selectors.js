import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APP;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getCardsToShow = (state) => {
  return state[NAME_SPACE].cardsToShow;
};

export const getErrorStatus = (state) => {
  return state[NAME_SPACE].error;
};
