import * as React from "react";
import * as renderer from "react-test-renderer";
import Error from "./error";


it(`Render Error`, () => {
  const tree = renderer
    .create(<Error/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
