import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  
  return (
    <section key={props.sampleDataForPhotoListItem.id} className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} />
        <div className="photo-list__user-info">
          <h3>{props.sampleDataForPhotoListItem.username}</h3>
          <h3 className="photo-list__user-location">{`${props.sampleDataForPhotoListItem.location.city}, ${props.sampleDataForPhotoListItem.location.country}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
