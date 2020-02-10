import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const FilmDetails = {
  NAME: `Whispering Mist`,
  GENRE: `Comedy`,
  RELEASE_DATE: 1995
};

const allFilms = [
  `The No Flowers`,
  `Rings of Cloud`,
  `The Sword's Memory`,
  `The Voyagers of the Words`,
  `Shores in the Heart`,
  `Missing Illusion`,
  `The Unwilling Man`,
  `Thorn of Soul`,
  `The Sons's Obsession`,
  `The Crying of the Souls`,
  `Sons in the Silk`,
  `Living Heat`,
  `The Prized Moon`,
  `Destruction of Predator`,
  `The Truth's Danger`,
  `The Tears of the Wizard`,
  `Teacher in the Hunter`,
  `Hidden Husband`,
  `The Luscious Truth`,
  `Gift of Female`
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      filmName={FilmDetails.NAME}
      filmGenre={FilmDetails.GENRE}
      filmReleaseDate={FilmDetails.RELEASE_DATE}
      allFilms={allFilms}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
