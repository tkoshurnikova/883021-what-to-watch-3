import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";
import {films} from "../../mocks-for-tests.js";

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <MovieCard
          film={films[0]}
          onCardHover={() => {}}
          onCardHoverOut={() => {}}
          onCardClick={() => {}}
          activeCard={films[0]}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
