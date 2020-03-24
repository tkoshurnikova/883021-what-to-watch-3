import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films} from "../../mocks-for-tests.js";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureMockStore([]);

it(`Render MoviePage`, () => {
  const store = mockStore({
    APP: {
      genre: ``,
      cardsToShow: 8
    },
    DATA: {
      films
    },
    USER: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MoviePage
              film={films[0]}
              onActiveItemChange={() => {}}
              activeItem={``}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
