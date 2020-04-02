import * as React from "react";
import * as renderer from "react-test-renderer";
import Main from "./main";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films, FilmDetails} from "../../mocks-for-tests";
import {Router} from "react-router-dom";
import history from "../../history";
import {noop} from "../../utils";

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
      isAuthorized: false
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Main
              PromoFilm={FilmDetails}
              filteredFilms={films}
              onCardClick={noop}
              cardsToShow={8}
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
