/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ProjectSummary = ({ video }) => {
  return (
      <div className="container">
        <iframe
          width="295"
          height="180"
          src={video.title}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button className="btn pink lighten-1 z-depth-0">Watch</button>
      </div>
  );
};

export default ProjectSummary;
