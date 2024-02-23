import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({favPhotos, toggleFavourite, modalActive, setModalActive}) => {
  return (
    <div className="home-route">
      <TopNavigation favPhotos={favPhotos} />
      <PhotoList favPhotos={favPhotos} 
      toggleFavourite={toggleFavourite} 
      modalActive={modalActive} 
      setModalActive={setModalActive}
      />    
    </div>
  );
};

export default HomeRoute;
