import {extend} from "../../utils";

export const adaptFilmData = (film) => {
  const adaptedFilmData = extend(film, {
    image: film.preview_image,
    numberOfVotes: film.scores_count,
    actors: film.starring,
    preview: film.preview_video_link,
    reviews: [],
    favorite: film.is_favorite
  });
  delete adaptedFilmData.preview_image;
  delete adaptedFilmData.scores_count;
  delete adaptedFilmData.starring;
  delete adaptedFilmData.preview_video_link;
  delete adaptedFilmData.is_favorite;
  return adaptedFilmData;
};

export const commentsAdapter = (item) => {
  return {
    id: item.id,
    rating: item.rating,
    date: item.date,
    author: {
      id: item.user.id,
      name: item.user.name
    },
    comment: item.comment
  };
};
