import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({favPhotos, toggleFavourite, photoModal, toggleModalForSelectedPhoto, photoData}) => {

  const photoListDetails = photoData.map((photoObj) => {
    return <PhotoListItem key={photoObj.id} 
    photoInfo={photoObj} 
    isFavourited={favPhotos.find(ph => ph.id === photoObj.id)} 
    toggleFavourite={toggleFavourite}
    photoModal={photoModal}
    toggleModalForSelectedPhoto={toggleModalForSelectedPhoto}
    />
  })

  return (
    <ul className="photo-list">
      {photoListDetails}
    </ul>
  );
};

export default PhotoList;
