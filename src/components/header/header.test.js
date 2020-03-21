import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

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
          <Header />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
