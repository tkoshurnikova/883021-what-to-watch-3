import * as React from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

type Props = RouteProps & {
  authorizationStatus: AuthorizationStatus.AUTH | AuthorizationStatus.NO_AUTH;
  exact: boolean;
  path: string;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
