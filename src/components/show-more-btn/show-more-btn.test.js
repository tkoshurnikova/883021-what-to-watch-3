import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreBtn} from "./show-more-btn.jsx";

it(`Render ShowMoreBtn`, () => {
  const tree = renderer
    .create(<ShowMoreBtn
      onShowMoreBtnClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
