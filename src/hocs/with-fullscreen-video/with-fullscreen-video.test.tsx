import * as React from "react";
import * as renderer from "react-test-renderer";
import withFullscreenVideo from "./with-fullscreen-video";
import {FilmDetails} from "../../mocks-for-tests";

interface MockComponentProps {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
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
