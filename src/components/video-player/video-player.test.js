import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {films} from "../../mocks-for-tests.js";

it(`Render VideoPlayer`, () => {
  const tree = renderer
    .create(<VideoPlayer
      film={films[0]}
      isPlaying={true}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
