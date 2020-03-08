import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";

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

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre, films) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre, films));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
