import React from "react";
import renderer from "react-test-renderer";
import HeaderFilm from "./header-film.jsx";
import {FilmDetails} from "../../mocks-for-tests.js";

it(`Render HeaderFilm`, () => {
  const tree = renderer
    .create(
        <HeaderFilm
          film={FilmDetails}
          onPlayOrExitButtonClick={() => {}}
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
