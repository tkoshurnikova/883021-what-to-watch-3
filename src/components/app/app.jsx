import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from 'react-redux';
import SignIn from "../sign-in/sign-in.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";
import withFullscreenVideo from "../../hocs/with-fullscreen-video/with-fullscreen-video.jsx";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
// import {AuthorizationStatus} from "../../const.js";
import AddReview from "../add-review/add-review.jsx";
import {Operation as DataOperations} from "../../reducer/data/data.js";
import withReviewValidation from "../../hocs/with-review-validation/with-review-validation.jsx";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import {getFilmByID} from "../../utils.js";

const WrappedMoviePage = withActiveItem(MoviePage);
const WrappedFullscreenPlayer = withFullscreenVideo(FullscreenPlayer);
const WrappedAddReview = withReviewValidation(AddReview);

class App extends PureComponent {
  render() {
    const {
      films,
      promoFilm,
      sendReview,
      login,
      // authorizationStatus,
    } = this.props;

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
          <Route
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

          {/* <Route exact path="/dev-sign-in" render={() => {
            if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
              return <SignIn onSubmit={login} />;
            } else if (authorizationStatus === AuthorizationStatus.AUTH) {
              return this._renderApp();
            }
            return null;
          }} /> */}

        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state)
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
