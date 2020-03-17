import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {films} from "../../mocks-for-tests.js";

it(`Render GenreList`, () => {
  const tree = renderer
    .create(<GenresList
      films={films}
      genre={`Drama`}
      onGenreChange={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
