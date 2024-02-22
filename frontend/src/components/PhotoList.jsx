import React from "react";

import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({favPhotos, toggleFavourite}) => {

  const photoListDetails = photos.map((photoObj) => {
    return <PhotoListItem key={photoObj.id} 
    photoInfo={photoObj} 
    isFavourited={favPhotos.find(ph => ph.id === photoObj.id) } 
    toggleFavourite={toggleFavourite}
    />
  })

  return (
    <ul className="photo-list">
      {photoListDetails}
    </ul>
  );
};

export default PhotoList;
