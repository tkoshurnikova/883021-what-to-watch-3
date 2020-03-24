import React from "react";
import renderer from "react-test-renderer";
import HeaderFilm from "./header-film.jsx";
import {FilmDetails} from "../../mocks-for-tests.js";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureMockStore([]);

it(`Render HeaderFilm`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <HeaderFilm
              film={FilmDetails}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
