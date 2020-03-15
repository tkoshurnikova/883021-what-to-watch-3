import React from "react";
import renderer from "react-test-renderer";
import HeaderFilm from "./header-film.jsx";

const FilmDetails = {
  title: `Whispering Mist`,
  genre: `Comedy`,
  year: 1995,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

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
