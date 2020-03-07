import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer.js";

const FilmDetails = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmName={FilmDetails.NAME}
        filmGenre={FilmDetails.GENRE}
        filmReleaseDate={FilmDetails.RELEASE_DATE}
      />
    </Provider>,
    document.querySelector(`#root`)
);
