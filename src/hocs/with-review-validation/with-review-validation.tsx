import * as React from "react";
import {Subtract} from "utility-types";
import {CommentLength} from "../../const";

interface State {
  reviewText: string;
  isCommentValid: boolean;
}

interface InjectingProps {
  reviewText: string;
  isCommentValid: boolean;
  onChange: () => void;
}

const withReviewValidation = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class WithReviewValidation extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        isCommentValid: false,
      };

      this._onCommentChange = this._onCommentChange.bind(this);
    }

    _onCommentChange(evt) {
      this.setState({
        reviewText: evt.target.value
      });
      this._validateComment(evt.target.value);
    }

    _validateComment(value) {
      let {isCommentValid} = this.state;
      isCommentValid = value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;
      this.setState({
        isCommentValid
      });
    }

    render() {
      const {reviewText, isCommentValid} = this.state;

      return <Component
        {...this.props}
        reviewText={reviewText}
        isCommentValid={isCommentValid}
        onChange={this._onCommentChange}
      />;
    }
  }

  return WithReviewValidation;
};

export default withReviewValidation;
