import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({filmName, filmGenre, filmReleaseDate, films}) => {

  return (
    <Main
      filmName={filmName}
      filmGenre={filmGenre}
      filmReleaseDate={filmReleaseDate}
      films={films}
    />
  );
};

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
