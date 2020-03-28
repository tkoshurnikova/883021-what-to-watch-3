import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {films} from "../../mocks-for-tests.js";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureMockStore([]);

it(`Render HeaderFilm`, () => {
  const store = mockStore({
    DATA: {
      favoriteFilms: [films[0], films[5]]
    },
    APP: {
      cardsToShow: 8
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList
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
