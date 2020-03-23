import React from "react";
import renderer from "react-test-renderer";
import withReviewValidation from "./with-review-validation.jsx";

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
