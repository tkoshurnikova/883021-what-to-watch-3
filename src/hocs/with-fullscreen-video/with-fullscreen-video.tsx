import * as React from "react";
import {Subtract} from "utility-types";

interface InjectingProps {
  isPlaying: boolean;
  isFullscreen: boolean;
  timeProgressInPercents: number;
  timeLeft: number;
  onFullscreenButtonClick: () => void;
  onPlayButtonClick: () => void;
}

interface State {
  isPlaying: boolean;
  isFullscreen: boolean;
  timeProgressInPercents: number;
  timeLeft: number;
}

const withFullscreenVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class WithFullscreenVideo extends React.PureComponent<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullscreen: false,
        timeProgressInPercents: 0,
        timeLeft: 0
      };

      this.videoRef = React.createRef();
      this.onFullscreenButtonClick = this.onFullscreenButtonClick.bind(this);
      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this.videoRef.current;
      video.src = film.video_link;

      video.ontimeupdate = () => this.setState({
        timeProgressInPercents: (video.currentTime / video.duration) * 100,
        timeLeft: Math.floor(video.duration - video.currentTime)
      });
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      const {isPlaying} = this.state;

      if (video.ended) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.setState({
              isPlaying: false
            });
          })
          .catch((err) => {
            throw new Error(err);
          });
        }
      }

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      video.src = ``;
      video.ontimeupdate = null;
    }

    onFullscreenButtonClick() {
      const {isFullscreen} = this.state;
      if (isFullscreen) {
        this.setState({
          isFullscreen: false
        });
      } else {
        this.setState({
          isFullscreen: true
        });
      }
    }

    onPlayButtonClick() {
      const {isPlaying} = this.state;
      this.setState({
        isPlaying: !isPlaying
      });
    }

    render() {
      const {isPlaying, isFullscreen, timeProgressInPercents, timeLeft} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          isFullscreen={isFullscreen}
          timeProgressInPercents={timeProgressInPercents}
          timeLeft={timeLeft}
          onFullscreenButtonClick={this.onFullscreenButtonClick}
          onPlayButtonClick={this.onPlayButtonClick}
        >
          <video
            className="player__video"
            poster="/img/player-poster.jpg"
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  return WithFullscreenVideo;
};

export default withFullscreenVideo;
