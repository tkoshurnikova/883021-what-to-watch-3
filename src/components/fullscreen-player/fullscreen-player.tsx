import * as React from "react";
import {convertSecondsToHours} from "../../utils";
import history from "../../history";
import {Film} from "../../types";

interface Props {
  film: Film;
  isPlaying: boolean;
  isFullscreen: boolean;
  timeProgressInPercents: number;
  timeLeft: number;
  onFullscreenButtonClick: () => void;
  onPlayButtonClick: () => void;
}

export default class FullscreenPlayer extends React.PureComponent<Props, {}> {
  private videoBlockRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.videoBlockRef = React.createRef();
  }

  render() {
    const {
      children,
      film,
      isPlaying,
      isFullscreen,
      timeProgressInPercents,
      timeLeft,
      onFullscreenButtonClick,
      onPlayButtonClick
    } = this.props;

    return (
      <div className="player" ref={this.videoBlockRef}>
        {children}
        <button type="button" className="player__exit" onClick={() => history.goBack()}>
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
              onClick={() => onPlayButtonClick()}
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
            <div className="player__name">{film.name}</div>
            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                if (isFullscreen) {
                  document.exitFullscreen();
                  onFullscreenButtonClick();
                } else {
                  this.videoBlockRef.current.requestFullscreen();
                  onFullscreenButtonClick();
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
