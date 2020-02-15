import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const FilmDetails = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App
      filmName={FilmDetails.NAME}
      filmGenre={FilmDetails.GENRE}
      filmReleaseDate={FilmDetails.RELEASE_DATE}
      films={films}
    />,
    document.querySelector(`#root`)
);
