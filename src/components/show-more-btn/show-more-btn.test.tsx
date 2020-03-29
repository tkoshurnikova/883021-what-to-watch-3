import * as React from "react";
import * as renderer from "react-test-renderer";
import {ShowMoreBtn} from "./show-more-btn";
import {noop} from "../../utils";

it(`Render ShowMoreBtn`, () => {
  const tree = renderer
    .create(<ShowMoreBtn
      onShowMoreBtnClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
