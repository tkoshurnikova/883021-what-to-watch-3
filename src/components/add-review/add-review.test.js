import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

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
          <AddReview
            onSubmit={() => {}}
            id={5}
            name={`name`}
            backgroundImage={`image`}
            posterImage={`poster`}
            isCommentValid={true}
            onChange={() => {}}
          />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
