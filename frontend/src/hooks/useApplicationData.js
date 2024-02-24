import React from "react";
import { useState } from "react";

const useApplicationData = () => {

  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavourite = (photo) => {
    const isFavourited = favPhotos.find((ph) => ph.id === photo.id);

    if (isFavourited) {
      setFavPhotos((prev) => prev.filter((ph) => ph.id !== photo.id));
    } else {
      setFavPhotos((prev) => [...prev, photo]);
    }
  };

  const [photoModal, setPhotoModal] = useState();

  const toggleModalForSelectedPhoto = (photo) => {
    setPhotoModal(photo);
  }


  return {favPhotos, toggleFavourite, photoModal, toggleModalForSelectedPhoto}
};

export default useApplicationData;