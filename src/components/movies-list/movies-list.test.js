import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films} from "../../mocks-for-tests.js";

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
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviesList
            films={films}
            onCardClick={() => {}}
            cardsToShow={8}
            activeItem={films[0]}
            onActiveItemChange={() => {}}
          />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
