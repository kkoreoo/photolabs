import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({favPhotos, toggleFavourite, photoModal, toggleModalForSelectedPhoto, photoData, topicData}) => {

  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos} topicData={topicData} />
      <PhotoList favPhotos={favPhotos} 
      toggleFavourite={toggleFavourite} 
      photoModal={photoModal} 
      toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
      photoData={photoData}
      />    
    </div>
  );
};

export default HomeRoute;
