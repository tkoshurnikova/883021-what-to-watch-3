import React from "react";
import renderer from "react-test-renderer";
import {MoviesList} from "./movies-list.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films} from "../../mocks-for-tests.js";

const mockStore = configureMockStore([]);
let store = mockStore({
  filteredFilms: [],
  films,
  genre: ``,
  cardsToShow: 8
});

it(`Render MoviesList`, () => {
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
