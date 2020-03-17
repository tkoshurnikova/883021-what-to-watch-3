import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {films} from "../../mocks-for-tests.js";

const activeTab = `Overview`;

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      film={films[0]}
      activeTab={activeTab}
      onTabClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
