import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

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

it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      film={film}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
