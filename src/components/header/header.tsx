import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AppRoute} from "../../const";

interface Props {
  isAuthorized: boolean;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {isAuthorized} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={AppRoute.MAIN} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <div className="user-block">
        {
          (isAuthorized) ?
            <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link> :
            <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
