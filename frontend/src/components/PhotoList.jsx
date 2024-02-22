import React from "react";

import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const photoListDetails = photos.map((photoObj) => {
  return <PhotoListItem key={photoObj.id} photoInfo={photoObj}/>
})

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photoListDetails}
    </ul>
  );
};

export default PhotoList;
