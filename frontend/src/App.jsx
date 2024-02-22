import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import { useState } from 'react';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhotos, setFavPhotos] = useState([]);

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
      <HomeRoute favPhotos={favPhotos} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default App;
