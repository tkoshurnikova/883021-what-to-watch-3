import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/app/app.js";
import SignIn from "../sign-in/sign-in.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";
import withFulscreenVideo from "../../hocs/with-fullscreen-video/with-fullscreen-video.jsx";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors.js";
import {getClickedCard, getChosenFilm} from "../../reducer/app/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../const.js";
import AddReview from "../add-review/add-review.jsx";
import {Operation as DataOperations} from "../../reducer/data/data.js";
import withReviewValidation from "../../hocs/with-review-validation/with-review-validation.jsx";

const WrappedMoviePage = withActiveItem(MoviePage);
const WrappedFulscreenPlayer = withFulscreenVideo(FullscreenPlayer);
const WrappedAddReview = withReviewValidation(AddReview);

class App extends PureComponent {
  _renderApp() {
    const {promoFilm, clickedCard, chosenFilm, onCardClick, onPlayOrExitButtonClick} = this.props;

    if (clickedCard) {
      return (
        <WrappedMoviePage
          film={clickedCard}
          onCardClick={onCardClick}
          onPlayOrExitButtonClick={onPlayOrExitButtonClick}
          chosenFilm={chosenFilm}
        />
      );
    }

    if (chosenFilm) {
      return (
        <WrappedFulscreenPlayer
          onPlayOrExitButtonClick={onPlayOrExitButtonClick}
          film={chosenFilm}
        />
      );
    }

    return (
      <Main
        PromoFilm={promoFilm}
        onCardClick={onCardClick}
        onPlayOrExitButtonClick={onPlayOrExitButtonClick}
      />
    );
  }

  render() {
    const {
      films,
      clickedCard,
      onCardClick,
      onPlayOrExitButtonClick,
      chosenFilm,
      login, authorizationStatus,
      sendReview
    } = this.props;
    const card = (clickedCard) ? clickedCard : films[0];
    const film = (chosenFilm) ? chosenFilm : films[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <WrappedMoviePage
              film={card}
              onCardClick={onCardClick}
              onPlayOrExitButtonClick={onPlayOrExitButtonClick}
              chosenFilm={film}
            />
          </Route>
          <Route exact path="/dev-sign-in" render={() => {
            if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
              return <SignIn onSubmit={login} />;
            } else if (authorizationStatus === AuthorizationStatus.AUTH) {
              return this._renderApp();
            }
            return null;
          }} />
          <Route exact path="/dev-add-review">
            <WrappedAddReview
              onSubmit={sendReview}
              id={1}
              name={`The Grand Budapest Hotel`}
              backgroundImage={`img/bg-the-grand-budapest-hotel.jpg`}
              posterImage={`img/the-grand-budapest-hotel-poster.jpg`}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  clickedCard: PropTypes.object,
  onCardClick: PropTypes.func.isRequired,
  chosenFilm: PropTypes.object,
  onPlayOrExitButtonClick: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  clickedCard: getClickedCard(state),
  chosenFilm: getChosenFilm(state),
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(card) {
    dispatch(ActionCreator.setClickedCard(card));
  },
  onPlayOrExitButtonClick(item) {
    dispatch(ActionCreator.setChosenFilm(item));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  sendReview(authData, id) {
    dispatch(DataOperations.sendReview(authData, id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
