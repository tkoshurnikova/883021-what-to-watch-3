import * as React from "react";
import * as renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {films} from "../../mocks-for-tests";
import {noop} from "../../utils";

it(`Render GenreList`, () => {
  const tree = renderer
    .create(<GenresList
      films={films}
      genre={`Drama`}
      onGenreChange={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
