import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

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

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard
      film={film}
      onCardHover={() => {}}
      onCardHoverOut={() => {}}
      onCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
