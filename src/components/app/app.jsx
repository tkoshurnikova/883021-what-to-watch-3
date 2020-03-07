import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";
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
    const {
      filmName, filmGenre, filmReleaseDate,
      films,
      filteredFilms,
      genre,
      onGenreChange
    } = this.props;
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
        filmName={filmName}
        filmGenre={filmGenre}
        filmReleaseDate={filmReleaseDate}
        films={films}
        filteredFilms={filteredFilms}
        genre={genre}
        onCardClick={this._onCardClick}
        onGenreChange={onGenreChange}
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
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  onGenreChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
  filteredFilms: state.filteredFilms
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre, films) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilmsByGenre(genre, films));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
