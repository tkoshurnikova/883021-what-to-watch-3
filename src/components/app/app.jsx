import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clickedCard: null
    };

    this._onCardClick = this._onCardClick.bind(this);
  }

  _onCardClick(film) {
    this.setState({
      clickedCard: film
    });
  }

  _renderApp() {
    const {PromoFilm} = this.props;
    const {clickedCard} = this.state;

    if (clickedCard) {
      return (
        <MoviePage
          film={clickedCard}
          onCardClick={this._onCardClick}
        />
      );
    }

    return (
      <Main
        PromoFilm={PromoFilm}
        onCardClick={this._onCardClick}
      />
    );
  }

  render() {
    const {clickedCard} = this.state;
    const {films} = this.props;
    const film = (clickedCard) ? clickedCard : films[0];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage
              film={film}
              onCardClick={this._onCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  PromoFilm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {App};
export default connect(mapStateToProps)(App);
