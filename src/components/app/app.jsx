import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({filmName, filmGenre, filmReleaseDate, allFilms}) => {

  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmReleaseDate={filmReleaseDate}
      allFilms={allFilms}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  allFilms: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
