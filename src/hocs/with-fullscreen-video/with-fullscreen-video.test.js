import React from "react";
import renderer from "react-test-renderer";
import withFullscreenVideo from "./with-fullscreen-video.jsx";
import PropTypes from "prop-types";
import {FilmDetails} from "../../mocks-for-tests.js";

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
