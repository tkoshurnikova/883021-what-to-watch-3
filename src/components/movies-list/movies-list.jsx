import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardWithHover:
      {
        title: null,
        image: null
      }
    };
  }

  render() {
    const {films} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {films.map((film) => (
            <MovieCard
              film={film}
              key={film.title}
              onHover={() => {
                this.setState({
                  cardWithHover:
                  {
                    title: film.title,
                    image: film.image
                  }
                });
              }}
              onHoverOut={() => {
                this.setState({
                  cardWithHover:
                  {
                    title: null,
                    image: null
                  }
                });
              }}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MoviesList;
