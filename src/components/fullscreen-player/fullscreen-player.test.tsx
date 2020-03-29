import * as React from "react";
import * as renderer from "react-test-renderer";
import FullscreenPlayer from "./fullscreen-player";
import {films} from "../../mocks-for-tests";
import {noop} from "../../utils";

it(`Render FullscreenPlayer`, () => {
  const tree = renderer
    .create(<FullscreenPlayer
      film={films[0]}
      isPlaying={false}
      isFullscreen={false}
      timeProgressInPercents={0}
      timeLeft={0}
      onFullscreenButtonClick={noop}
      onPlayButtonClick={noop}
    >
      <video/>
    </FullscreenPlayer>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
