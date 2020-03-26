import {extend} from "../../utils.js";

export default (data) => {
  const adaptedData = data.map((item) => {
    const adaptedFilmData = extend(item, {
      image: item.preview_image,
      numberOfVotes: item.scores_count,
      actors: item.starring,
      preview: item.preview_video_link,
      reviews: [],
      favorite: item.is_favorite
    });
    delete adaptedFilmData.preview_image;
    delete adaptedFilmData.scores_count;
    delete adaptedFilmData.starring;
    delete adaptedFilmData.preview_video_link;
    delete adaptedFilmData.is_favorite;
    return adaptedFilmData;
  });
  return adaptedData;
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
