import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {films} from "../../mocks-for-tests";
import {Router} from "react-router-dom";
import history from "../../history";
import {noop} from "../../utils";

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MovieCard
            film={films[0]}
            onCardHover={noop}
            onCardHoverOut={noop}
            activeCard={films[0]}
            loadReviews={noop}
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
