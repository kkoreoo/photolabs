import React from "react";

import topics from "mocks/topics";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const topicListItemInfo = topics.map((topicObj) => {
  return <TopicListItem key={topicObj.id} topicInfo={topicObj}/>
})

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemInfo}
    </div>
  );
};

export default TopicList;
