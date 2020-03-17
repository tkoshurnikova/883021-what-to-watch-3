import {extend} from "../../utils.js";

export default (data) => {
  const adaptedData = data.map((item) => {
    const adaptedFilmData = extend(item, {
      image: item.preview_image,
      numberOfVotes: item.scores_count,
      actors: item.starring,
      preview: item.preview_video_link,
    });
    delete adaptedFilmData.preview_image;
    delete adaptedFilmData.scores_count;
    delete adaptedFilmData.starring;
    delete adaptedFilmData.preview_video_link;
    return adaptedFilmData;
  });
  return adaptedData;
};
