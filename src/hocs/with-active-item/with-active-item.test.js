import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.jsx";
import {FilmDetails} from "../../mocks-for-tests.js";

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
