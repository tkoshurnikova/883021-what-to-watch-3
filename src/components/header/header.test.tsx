import * as React from "react";
import * as renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureMockStore([]);

it(`Render Header`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
