import React from "react";
import renderer from "react-test-renderer";
import FullscreenPlayer from "./fullscreen-player.jsx";
import {films} from "../../mocks-for-tests.js";

it(`Render FullscreenPlayer`, () => {
  const tree = renderer
    .create(<FullscreenPlayer
      onPlayOrExitButtonClick={() => {}}
      film={films[0]}
      isPlaying={false}
      isFullscreen={false}
      timeProgressInPercents={0}
      timeLeft={0}
      onFullscreenButtonClick={() => {}}
      onPlayButtonClick={() => {}}
    >
      <video/>
    </FullscreenPlayer>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
