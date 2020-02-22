import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    const {film} = this.props;
    const video = this._videoRef.current;

    video.src = film.preview;

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {film} = this.props;

    return (
      <video
        muted
        autoPlay
        ref={this._videoRef}
        poster={film.image}
        width="280"
        height="175"
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}
