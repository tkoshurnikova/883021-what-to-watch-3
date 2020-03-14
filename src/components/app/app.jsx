import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import FullscreenPlayer from "../fullscreen-player/fullscreen-player.jsx";

const WrappedMoviePage = withActiveItem(MoviePage);

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
        <FullscreenPlayer
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
    const film = (clickedCard) ? clickedCard : films[0];
    const src = (chosenFilm) ? chosenFilm : films[0].src;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <WrappedMoviePage
              film={film}
              onCardClick={onCardClick}
              onPlayOrExitButtonClick={onPlayOrExitButtonClick}
              chosenFilm={src}
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
  films: state.films,
  clickedCard: state.clickedCard,
  chosenFilm: state.chosenFilm
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
