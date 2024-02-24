import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { 
    state, 
    toggleFavourite, 
    toggleModalForSelectedPhoto, 
  } = useApplicationData()

  return (
    <div className="App">
      {state.photoModal && <PhotoDetailsModal
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        toggleFavourite={toggleFavourite}
        favPhotos={state.favPhotos.find(ph => ph.id === state.photoModal.id)}
      />}
      <HomeRoute favPhotos={state.favPhotos}
        toggleFavourite={toggleFavourite}
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
      />
    </div>
  );
};

export default App;
