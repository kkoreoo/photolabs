import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhotos, setFavPhotos] = useState([]);
  const [photoModal, setPhotoModal] = useState();

  const toggleFavourite = (photo) => {
    const isFavourited = favPhotos.find((ph => ph.id === photo.id));
    if (isFavourited) {
      setFavPhotos((prev) => prev.filter((ph) => ph.id !== photo.id));
    } else {
      // Add photo to favPhotos Array
      setFavPhotos((prev) => [...prev, photo]);
    }
  }

  return (
    <div className="App">
      {photoModal && <PhotoDetailsModal photoModal={photoModal} setPhotoModal={setPhotoModal}/>} 
      <HomeRoute favPhotos={favPhotos} 
      toggleFavourite={toggleFavourite} 
      photoModal={photoModal} 
      setPhotoModal={setPhotoModal}
      />
    </div>
  );
};

export default App;
