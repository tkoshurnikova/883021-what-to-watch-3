import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({children}) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

VideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default VideoPlayer;
