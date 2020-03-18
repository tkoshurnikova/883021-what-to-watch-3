import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";

const api = createAPI();

// const PromoFilm = {
//   title: `The Grand Budapest Hotel`,
//   genre: `Drama`,
//   year: 2014,
//   video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
// };

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());

ReactDOM.render(
    <Provider store={store}>
      <App
        // PromoFilm={PromoFilm}
      />
    </Provider>,
    document.querySelector(`#root`)
);
