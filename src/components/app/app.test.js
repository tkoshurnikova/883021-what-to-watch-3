import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films, FilmDetails} from "../../mocks-for-tests";

const mockStore = configureMockStore([]);

it(`Render App`, () => {
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
          <App
            clickedCard={films[0]}
            login={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
