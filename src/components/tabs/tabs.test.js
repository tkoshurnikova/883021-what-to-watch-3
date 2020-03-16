import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

const film = {
  title: `The No Flowers`,
  image: `http://placehold.it/280x175`,
  description: `qwerty`,
  rating: 1.0,
  numberOfVotes: 1982,
  director: `Taika Di Caprio`,
  actors: [`Ashley Cooper`],
  genre: `Dramas`,
  year: 1900
};

const activeTab = `Overview`;

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      film={film}
      activeTab={activeTab}
      onTabClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
