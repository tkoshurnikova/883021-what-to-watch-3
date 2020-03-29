import * as React from "react";
import * as renderer from "react-test-renderer";
import withActiveItem from "./with-active-item";
import {FilmDetails} from "../../mocks-for-tests";

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Render withActiveItem`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        activeItem={FilmDetails}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
