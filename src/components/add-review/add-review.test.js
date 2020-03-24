import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks-for-tests.js";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureMockStore([]);

it(`Render AddReview`, () => {
  const store = mockStore({
    DATA: {
      formBlock: false,
      sendingStatusText: ``
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <AddReview
              onSubmit={() => {}}
              film={films[0]}
              isCommentValid={true}
              onChange={() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
