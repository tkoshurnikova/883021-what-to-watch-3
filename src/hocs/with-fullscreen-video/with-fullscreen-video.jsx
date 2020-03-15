import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withFullscreenVideo = (Component) => {
  class WithFulscreenVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullscreen: false,
        timeProgressInPercents: 0,
        timeLeft: 0
      };

      this._videoRef = createRef();
      this.onFullscreenButtonClick = this.onFullscreenButtonClick.bind(this);
      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;
      video.src = film.video;

      video.ontimeupdate = () => this.setState({
        timeProgressInPercents: (video.currentTime / video.duration) * 100,
        timeLeft: Math.floor(video.duration - video.currentTime)
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
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
      const video = this._videoRef.current;
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
            poster="img/player-poster.jpg"
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithFulscreenVideo.propTypes = {
    film: PropTypes.object.isRequired,
  };

  return WithFulscreenVideo;
};

export default withFullscreenVideo;
