import React from "react";
import renderer from "react-test-renderer";
import withFullscreenVideo from "./with-fullscreen-video.jsx";
import PropTypes from "prop-types";

const FilmDetails = {
  title: `Whispering Mist`,
  genre: `Comedy`,
  year: 1995,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withFullscreenVideo(MockComponent);

it(`Render withFullscreenVideo`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        film={FilmDetails}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
