import React from "react";
import renderer from "react-test-renderer";
import Error from "./error.jsx";


it(`Render Error`, () => {
  const tree = renderer
    .create(<Error/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
