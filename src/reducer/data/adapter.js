import {extend} from "../../utils.js";

export default (data) => {
  const adaptedData = data.map((item) => {
    const adaptedFilmData = extend(item, {
      title: item.name,
      image: item.preview_image,
      numberOfVotes: item.scores_count,
      actors: item.starring,
      year: item.released,
      preview: item.preview_video_link,
      video: item.video_link
    });
    delete adaptedFilmData.name;
    delete adaptedFilmData.preview_image;
    delete adaptedFilmData.scores_count;
    delete adaptedFilmData.starring;
    delete adaptedFilmData.released;
    delete adaptedFilmData.preview_video_link;
    delete adaptedFilmData.video_link;
    return adaptedFilmData;
  });
  return adaptedData;
};
