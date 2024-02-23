import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useState } from 'react';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhotos, setFavPhotos] = useState([]);
  const [modalActive, setModalActive] = useState(false);


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
      {modalActive && <PhotoDetailsModal />} 
      <HomeRoute favPhotos={favPhotos} 
      toggleFavourite={toggleFavourite} 
      modalActive={modalActive} 
      setModalActive={setModalActive}
      />
    </div>
  );
};

export default App;
