import * as React from "react";
import * as renderer from "react-test-renderer";
import AddReview from "./add-review";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {films} from "../../mocks-for-tests";
import {Router} from "react-router-dom";
import history from "../../history";
import {noop} from "../../utils";

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
              onSubmit={noop}
              film={films[0]}
              isCommentValid={true}
              onChange={noop}
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
