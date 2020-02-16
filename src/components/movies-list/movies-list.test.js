import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

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

it(`Render MoviesList`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
