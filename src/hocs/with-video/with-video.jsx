import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;
      video.src = film.preview;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.src = ``;
    }

    render() {
      const {film} = this.props;

      return (
        <Component
          {...this.props}
        >
          <video
            muted
            autoPlay
            ref={this._videoRef}
            poster={film.image}
            width="280"
            height="175"
          />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      numberOfVotes: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      actors: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithVideo;
};

export default withVideo;
