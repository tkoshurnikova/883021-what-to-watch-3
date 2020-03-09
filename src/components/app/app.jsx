import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const WrappedMoviePage = withActiveItem(MoviePage);

class App extends PureComponent {
  _renderApp() {
    const {PromoFilm, clickedCard, onCardClick} = this.props;

    if (clickedCard) {
      return (
        <WrappedMoviePage
          film={clickedCard}
          onCardClick={onCardClick}
        />
      );
    }

    return (
      <Main
        PromoFilm={PromoFilm}
        onCardClick={onCardClick}
      />
    );
  }

  render() {
    const {films, clickedCard, onCardClick} = this.props;
    const film = (clickedCard) ? clickedCard : films[0];

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
  onCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  clickedCard: state.clickedCard
});

const mapDispatchToProps = (dispatch) => ({
  onCardClick(card) {
    dispatch(ActionCreator.setClickedCard(card));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
