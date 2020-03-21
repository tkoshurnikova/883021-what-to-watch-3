import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

class Header extends PureComponent {
  renderLoginBlock() {
    const {authorizationStatus} = this.props;
    let returnFragment;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      returnFragment = (
        <div className="user-block">
          <a href="#" className="user-block__link">Sign in</a>
        </div>
      );
    } else if (authorizationStatus === AuthorizationStatus.AUTH) {
      returnFragment = (
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      );
    }

    return returnFragment;
  }

  render() {
    const loginBlock = this.renderLoginBlock();

    return (
      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        {loginBlock}
      </header>
    );
  }
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
