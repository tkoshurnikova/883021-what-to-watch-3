import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const film = {
  title: `The No Flowers`,
  image: `http://placehold.it/280x175`
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
