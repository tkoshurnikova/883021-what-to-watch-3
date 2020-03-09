import React from "react";
import renderer from "react-test-renderer";
import HeaderFilm from "./header-film.jsx";

const FilmDetails = {
  NAME: `Whispering Mist`,
  GENRE: `Comedy`,
  RELEASE_DATE: 1995
};

it(`Render HeaderFilm`, () => {
  const tree = renderer
    .create(<HeaderFilm
      title={FilmDetails.NAME}
      genre={FilmDetails.GENRE}
      year={FilmDetails.RELEASE_DATE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
