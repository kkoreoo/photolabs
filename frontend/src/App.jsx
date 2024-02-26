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
    togglePhotosByTopic,
  } = useApplicationData()

  return (
    <div className="App">
      {state.photoModal && <PhotoDetailsModal
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        toggleFavourite={toggleFavourite}
        favPhotos={state.favPhotos}
      />}
      <HomeRoute 
        favPhotos={state.favPhotos}
        toggleFavourite={toggleFavourite}
        photoModal={state.photoModal}
        toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
        photoData={state.photoData}
        topicData={state.topicData}
        togglePhotosByTopic={togglePhotosByTopic}
      />
    </div>
  );
};

export default App;
