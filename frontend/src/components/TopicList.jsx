import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({topicData}) => {

  const topicListItemInfo = topicData.map((topicObj) => {
    return <TopicListItem key={topicObj.id} topicInfo={topicObj}/>
  })  

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItemInfo}
    </div>
  );
};

export default TopicList;
