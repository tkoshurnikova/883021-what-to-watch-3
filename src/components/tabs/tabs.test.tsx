import * as React from "react";
import * as renderer from "react-test-renderer";
import Tabs from "./tabs";
import {films} from "../../mocks-for-tests";
import {noop} from "../../utils";

const activeTab = `Overview`;

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      film={films[0]}
      activeTab={activeTab}
      onTabClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
