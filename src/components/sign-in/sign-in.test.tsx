import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {Router} from "react-router-dom";
import history from "../../history";
import {noop} from "../../utils";

it(`Render SignIn`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onSubmit={noop}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
