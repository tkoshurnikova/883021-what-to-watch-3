import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const films = [
  {
    title: `The No Flowers`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `Rings of Cloud`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `The Sword's Memory`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `The Voyagers of the Words`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `Shores in the Heart`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `Missing Illusion`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `The Unwilling Man`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  },
  {
    title: `Teacher in the Hunter`,
    image: `http://placehold.it/280x175`,
    description: `qwerty`,
    rating: 1.0,
    numberOfVotes: 1982,
    director: `Taika Di Caprio`,
    actors: `Ashley Cooper`,
    genre: `Dramas`,
    year: 1900
  }
];

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
      onCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});