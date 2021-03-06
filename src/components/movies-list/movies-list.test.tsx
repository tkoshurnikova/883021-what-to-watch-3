import * as React from "react";
import * as renderer from "react-test-renderer";
import MoviesList from "./movies-list";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks-for-tests";
import {Router} from "react-router-dom";
import history from "../../history";
import {noop} from "../../utils";

const mockStore = configureMockStore([]);

it(`Render MoviesList`, () => {
  const store = mockStore({
    APP: {
      genre: ``,
      cardsToShow: 8
    },
    DATA: {
      films
    },
    USER: {
      isAuthorized: false
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MoviesList
              films={films}
              cardsToShow={8}
              activeItem={films[0]}
              onActiveItemChange={noop}
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
