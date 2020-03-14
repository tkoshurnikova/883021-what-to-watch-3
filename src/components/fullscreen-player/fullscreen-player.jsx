import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {convertSecondsToHours} from "../../utils.js";

export default class FullscreenPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isFullscreen: false,
      timeProgressInPercents: 0,
      timeLeft: 0
    };

    this._videoRef = createRef();
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
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

  render() {
    const {onPlayOrExitButtonClick, film} = this.props;
    const {isPlaying, isFullscreen, timeProgressInPercents, timeLeft} = this.state;

    return (
      <div className="player">
        <video
          className="player__video"
          poster="img/player-poster.jpg"
          ref={this._videoRef}
        />
        <button type="button" className="player__exit" onClick={() => onPlayOrExitButtonClick(null)}>
          Exit
        </button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={timeProgressInPercents} max={100} />
              <div className="player__toggler" style={{left: `${timeProgressInPercents}%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{convertSecondsToHours(timeLeft)}</div>
          </div>
          <div className="player__controls-row">
            <button
              onClick={() => this.setState({isPlaying: !this.state.isPlaying})}
              type="button"
              className="player__play"
            >
              {isPlaying ? (
                <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </React.Fragment>
              )}
            </button>
            <div className="player__name">{film.title}</div>
            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                if (isFullscreen) {
                  document.exitFullscreen();
                  this.setState({
                    isFullscreen: false
                  });
                } else {
                  this._videoRef.current.parentNode.requestFullscreen();
                  this.setState({
                    isFullscreen: true
                  });
                }
              }}
            >
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FullscreenPlayer.propTypes = {
  film: PropTypes.object.isRequired,
  onPlayOrExitButtonClick: PropTypes.func.isRequired
};
