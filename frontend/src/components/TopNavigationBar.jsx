import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({favPhotos, topicData}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData}/>
      <FavBadge isFavPhotoExist={favPhotos.length > 0 } />
    </div>
  )
}

export default TopNavigation;