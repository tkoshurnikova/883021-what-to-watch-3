import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films, FilmDetails} from "../../mocks-for-tests";

const mockStore = configureMockStore([]);
let store = mockStore({
  APP: {
    genre: ``,
    cardsToShow: 8
  },
  DATA: {
    films,
    promoFilm: FilmDetails
  }
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            promoFilm={FilmDetails}
            films={films}
            onCardClick={() => {}}
            clickedCard={films[0]}
            onPlayOrExitButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
