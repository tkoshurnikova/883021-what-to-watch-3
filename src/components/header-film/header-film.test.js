import React from "react";
import renderer from "react-test-renderer";
import HeaderFilm from "./header-film.jsx";

const FilmDetails = {
  NAME: `Whispering Mist`,
  GENRE: `Comedy`,
  RELEASE_DATE: 1995,
  SRC: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Render HeaderFilm`, () => {
  const tree = renderer
    .create(
        <HeaderFilm
          title={FilmDetails.NAME}
          genre={FilmDetails.GENRE}
          year={FilmDetails.RELEASE_DATE}
          src={FilmDetails.SRC}
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
