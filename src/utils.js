export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertSecondsToHours = (time) => {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60) - (hours * 60);
  let seconds = time % 60;
  let formatted = hours.toString().padStart(2, `0`) + `:` + minutes.toString().padStart(2, `0`) + `:` + seconds.toString().padStart(2, `0`);
  return formatted;
};

export const getFilmByID = (films, id) => films.find((film) => film.id === Number(id));

export const noop = () => {};
