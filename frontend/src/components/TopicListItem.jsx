import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span><h3>{props.topicInfo.title}</h3></span>
    </div>
  );
};

export default TopicListItem;
