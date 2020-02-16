import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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
    const {filmName, filmGenre, filmReleaseDate, films} = this.props;
    const {clickedCard} = this.state;

    if (clickedCard) {
      return (
        <MoviePage
          film={clickedCard}
        />
      );
    }

    return (
      <Main
        filmName={filmName}
        filmGenre={filmGenre}
        filmReleaseDate={filmReleaseDate}
        films={films}
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
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
