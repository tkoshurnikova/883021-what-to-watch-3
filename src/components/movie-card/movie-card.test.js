import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {films} from "../../mocks-for-tests.js";
import {Router} from "react-router-dom";
import history from "../../history";

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCard
            film={films[0]}
            onCardHover={() => {}}
            onCardHoverOut={() => {}}
            activeCard={films[0]}
          />
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
