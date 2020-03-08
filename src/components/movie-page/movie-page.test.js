import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const film = {
  title: `The No Flowers`,
  image: `http://placehold.it/280x175`,
  description: `qwerty`,
  rating: 1.0,
  numberOfVotes: 1982,
  director: `Taika Di Caprio`,
  actors: `Ashley Cooper`,
  genre: `Dramas`,
  year: 1900
};

const mockStore = configureMockStore([]);
let store = mockStore({
  filteredFilms: [],
  films: [],
  genre: ``,
  cardsToShow: 8
});


it(`Render MoviePage`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            film={film}
            onCardClick={() => {}}
          />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
