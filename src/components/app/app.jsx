import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/app/app.js";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";
import withFulscreenVideo from "../../hocs/with-fullscreen-video/with-fullscreen-video.jsx";
import {getFilms} from "../../reducer/data/selectors.js";
import {getClickedCard, getChosenFilm} from "../../reducer/app/selectors.js";

const WrappedMoviePage = withActiveItem(MoviePage);
const WrappedFulscreenPlayer = withFulscreenVideo(FullscreenPlayer);

class App extends PureComponent {
  _renderApp() {
    const {PromoFilm, clickedCard, chosenFilm, onCardClick, onPlayOrExitButtonClick} = this.props;

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
        PromoFilm={PromoFilm}
        onCardClick={onCardClick}
        onPlayOrExitButtonClick={onPlayOrExitButtonClick}
      />
    );
  }

  render() {
    const {films, clickedCard, onCardClick, onPlayOrExitButtonClick, chosenFilm} = this.props;
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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  PromoFilm: PropTypes.object.isRequired,
  clickedCard: PropTypes.object,
  onCardClick: PropTypes.func.isRequired,
  chosenFilm: PropTypes.object,
  onPlayOrExitButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  clickedCard: getClickedCard(state),
  chosenFilm: getChosenFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(card) {
    dispatch(ActionCreator.setClickedCard(card));
  },
  onPlayOrExitButtonClick(item) {
    dispatch(ActionCreator.setChosenFilm(item));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
