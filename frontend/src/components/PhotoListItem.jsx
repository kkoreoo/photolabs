import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <section className="photo-list__item">
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} />
      <span className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} />
        <div className="photo-list__user-info">
          <h3>{props.sampleDataForPhotoListItem.username}</h3>
          <h3 className="photo-list__user.location">{`${props.sampleDataForPhotoListItem.location.city}, ${props.sampleDataForPhotoListItem.location.country}`}</h3>
        </div>
      </span>
    </section>
  );
};

export default PhotoListItem;
