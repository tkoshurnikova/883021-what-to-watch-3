import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {films, FilmDetails} from "../../mocks-for-tests.js";

const mockStore = configureMockStore([]);

it(`Render Main`, () => {
  const store = mockStore({
    APP: {
      genre: ``,
      cardsToShow: 8
    },
    DATA: {
      films,
      promoFilm: FilmDetails
    },
    USER: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            PromoFilm={FilmDetails}
            filteredFilms={films}
            onCardClick={() => {}}
            cardsToShow={8}
            onPlayOrExitButtonClick={() => {}}
          />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
