import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films, FilmDetails} from "../../mocks-for-tests";
import {noop} from "../../utils";

const mockStore = configureMockStore([]);

it(`Render App`, () => {
  const store = mockStore({
    APP: {
      genre: ``,
      cardsToShow: 8,
      error: false
    },
    DATA: {
      films,
      promoFilm: FilmDetails,
      favoriteFilms: []
    },
    USER: {
      isAuthorized: false
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            clickedCard={films[0]}
            login={noop}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
