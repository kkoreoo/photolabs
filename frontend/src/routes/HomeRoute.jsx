import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({favPhotos, toggleFavourite}) => {
  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos} />
      <PhotoList favPhotos={favPhotos} toggleFavourite={toggleFavourite}/>    
    </div>
  );
};

export default HomeRoute;
