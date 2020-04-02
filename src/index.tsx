import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import reducer from "./reducer/reducer";
import {createAPI} from "./api";
import {Operation as DataOperation} from "./reducer/data/data";
import {ActionCreator as AppActionCreator} from "./reducer/app/app";
import {Operation as UserOperation, ActionCreator as UserActionCreator} from "./reducer/user/user";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(false));
};

const onRequestFail = () => {
  store.dispatch(AppActionCreator.requestFail());
};

const api = createAPI(onUnauthorized, onRequestFail);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
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
