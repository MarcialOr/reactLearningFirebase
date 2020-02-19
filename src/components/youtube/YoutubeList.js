import React from "react";
import YoutubeSummary from "./YoutubeSummary";

const YoutubeList = ({videos}) => {
  return (
<div className="project-list section container-video">
        { videos && videos.map(video => {
          return (
            <YoutubeSummary video={video} key={video.id} />
          )
        })}
    </div>
  );
};

export default YoutubeList;