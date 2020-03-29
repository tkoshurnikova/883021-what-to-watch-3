import * as React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MoviePage from "../movie-page/movie-page";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player";
import AddReview from "../add-review/add-review";
import MyList from "../my-list/my-list";
import Error from "../error/error";
import PrivateRoute from "../private-route/private-route";

import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withFullscreenVideo from "../../hocs/with-fullscreen-video/with-fullscreen-video";
import withReviewValidation from "../../hocs/with-review-validation/with-review-validation";

import {getFilms, getPromoFilm} from "../../reducer/data/selectors";
import {getErrorStatus} from "../../reducer/app/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperations} from "../../reducer/data/data";

import {AppRoute} from "../../const";
import {getFilmByID} from "../../utils";

const WrappedMoviePage = withActiveItem(MoviePage);
const WrappedFullscreenPlayer = withFullscreenVideo(FullscreenPlayer);
const WrappedAddReview = withReviewValidation(AddReview);

class App extends React.PureComponent {
  render() {
    const {
      films,
      promoFilm,
      sendReview,
      login,
      error
    } = this.props;

    if (error) {
      return <Error/>;
    }

    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={AppRoute.MAIN}
            render={() => {
              return (
                <Main
                  PromoFilm={promoFilm}
                />
              );
            }}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={() => {
              return (
                <SignIn onSubmit={login} />
              );
            }}
          />
          <Route
            exact
            path={`${AppRoute.FILMS}/:id`}
            render={(props) => {
              const {id} = props.match.params;
              const film = getFilmByID(films, id);
              return (
                <WrappedMoviePage
                  film={film}
                  chosenFilm={film}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILMS}/:id/review`}
            render={(props) => {
              const {id} = props.match.params;
              const film = getFilmByID(films, id);
              return (
                <WrappedAddReview
                  onSubmit={sendReview}
                  film={film}
                />
              );
            }}
          />
          <Route
            exact
            path={`${AppRoute.PLAYER}/:id`}
            render={(props) => {
              const {id} = props.match.params;
              const film = getFilmByID(films, id);
              return (
                <WrappedFullscreenPlayer
                  film={film}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                <MyList />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  sendReview: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  error: getErrorStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  sendReview(authData, id) {
    dispatch(DataOperations.sendReview(authData, id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
