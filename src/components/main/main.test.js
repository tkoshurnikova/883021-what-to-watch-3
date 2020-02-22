import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const FilmDetails = {
  NAME: `Whispering Mist`,
  GENRE: `Comedy`,
  RELEASE_DATE: 1995
};

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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    year: 1900,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];


it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      filmName={FilmDetails.NAME}
      filmGenre={FilmDetails.GENRE}
      filmReleaseDate={FilmDetails.RELEASE_DATE}
      films={films}
      onCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
