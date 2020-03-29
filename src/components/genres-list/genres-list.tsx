import * as React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app";
import {getGenre} from "../../reducer/app/selectors";
import {getFilms} from "../../reducer/data/selectors";
import {Film} from "../../types";

interface Props {
  films: Film[];
  genre: string;
  onGenreChange: (genre: string, films: Film[]) => void;
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
  const {films, genre, onGenreChange} = props;
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

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetCardsCount());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
