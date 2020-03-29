import * as React from "react";
import * as renderer from "react-test-renderer";
import withReviewValidation from "./with-review-validation";

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewValidation(MockComponent);

it(`Render withReviewValidation`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped/>),
    {
      createNodeMock() {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
