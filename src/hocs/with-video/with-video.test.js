import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideo from "./with-video.jsx";

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

const MockComponentWrapped = withVideo(MockComponent);

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      film={film}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
