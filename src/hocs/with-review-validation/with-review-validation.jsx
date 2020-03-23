import React, {PureComponent} from "react";
import {CommentLength} from "../../const.js";

const withReviewValidation = (Component) => {
  class WithReviewValidation extends PureComponent {
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
