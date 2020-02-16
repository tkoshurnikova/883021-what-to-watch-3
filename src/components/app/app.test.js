import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FilmDetails = {
  NAME: `Whispering Mist`,
  GENRE: `Comedy`,
  RELEASE_DATE: 1995
};

const films = [
  {
    title: `The No Flowers`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `Rings of Cloud`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `The Sword's Memory`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `The Voyagers of the Words`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `Shores in the Heart`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `Missing Illusion`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `The Unwilling Man`,
    image: `http://placehold.it/280x175`
  },
  {
    title: `Teacher in the Hunter`,
    image: `http://placehold.it/280x175`
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      filmName={FilmDetails.NAME}
      filmGenre={FilmDetails.GENRE}
      filmReleaseDate={FilmDetails.RELEASE_DATE}
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
