import * as React from "react";
import * as renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {films} from "../../mocks-for-tests";

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
