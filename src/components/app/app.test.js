import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const FilmDetails = {
  title: `Whispering Mist`,
  genre: `Comedy`,
  year: 1995,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
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
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

const mockStore = configureMockStore([]);
let store = mockStore({
  filteredFilms: [],
  films,
  genre: ``,
  cardsToShow: 8
});

it(`Render App`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            PromoFilm={FilmDetails}
            films={films}
            onCardClick={() => {}}
            clickedCard={films[0]}
            onPlayOrExitButtonClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
