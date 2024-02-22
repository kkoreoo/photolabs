import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  
  return (
    <section key={props.photoInfo.id} className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photoInfo.urls.full} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photoInfo.user.profile} />
        <div className="photo-list__user-info">
          <h3>{props.photoInfo.user.name}</h3>
          <h3 className="photo-list__user-location">{`${props.photoInfo.location.city}, ${props.photoInfo.location.country}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
