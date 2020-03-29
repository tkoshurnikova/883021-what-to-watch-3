import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {ActionCreator as AppActionCreator} from "./reducer/app/app.js";
import {Operation as UserOperation, ActionCreator as UserActionCreator} from "./reducer/user/user.js";
import {AuthorizationStatus} from "./const.js";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onRequestFail = () => {
  store.dispatch(AppActionCreator.requestFail());
};

const api = createAPI(onUnauthorized, onRequestFail);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
