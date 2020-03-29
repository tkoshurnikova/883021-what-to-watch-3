import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AppRoute} from "../../const";

interface Props {
  authorizationStatus: AuthorizationStatus.AUTH | AuthorizationStatus.NO_AUTH;
}

class Header extends React.PureComponent<Props, {}> {
  renderLoginBlock() {
    const {authorizationStatus} = this.props;
    let returnFragment;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      returnFragment = (
        <div className="user-block">
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        </div>
      );
    } else if (authorizationStatus === AuthorizationStatus.AUTH) {
      returnFragment = (
        <div className="user-block">
          <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </Link>
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
          <Link to={AppRoute.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {loginBlock}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
