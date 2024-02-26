import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({favPhotos, topicData, togglePhotosByTopic}) => {
  const selected = true;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => togglePhotosByTopic(null)}>PhotoLabs</span>
      <TopicList topicData={topicData} togglePhotosByTopic={togglePhotosByTopic}/>
      <FavBadge isFavPhotoExist={favPhotos.length > 0 } selected={selected} />
    </div>
  )
}

export default TopNavigation;