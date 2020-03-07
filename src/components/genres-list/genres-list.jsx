import React from "react";
import PropTypes from "prop-types";

const GenresList = ({films, genre, onGenreChange}) => {
  const genres = [...new Set([`All genres`, ...films.map((film) => film.genre)])];

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((item) => {
          return (
            <li
              key={item}
              className={item === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onGenreChange(item, films);
                }}
              >{item}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired
};

export default GenresList;
