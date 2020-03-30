import * as React from "react";
import {Film} from "../../types";

interface Props {
  film: Film;
  isPlaying: boolean;
}

export default class VideoPlayer extends React.PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {film} = this.props;
    const video = this.videoRef.current;
    video.src = film.preview;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.src = ``;
  }

  render() {
    const {film} = this.props;

    return (
      <video
        muted
        autoPlay
        ref={this.videoRef}
        poster={film.image}
        width="280"
        height="175"
      />
    );
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}
