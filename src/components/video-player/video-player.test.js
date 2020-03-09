import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
const film = {
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
};

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(<VideoPlayer
      film={film}
      isPlaying={true}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
