import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {

  const {
    isFavourited,
    photoInfo,
    toggleFavourite,
  } = props;


  const openModal = () => {
    props.toggleModalForSelectedPhoto(photoInfo);
  }

  return (
    <section key={photoInfo.id} className="photo-list__item" >
      <PhotoFavButton isFavourited={isFavourited} toggleFavourite={() => toggleFavourite(photoInfo)}/>
      <img className="photo-list__image" src={photoInfo.urls.full} onClick={openModal} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoInfo.user.profile} />
        <div className="photo-list__user-info">
          <h3>{photoInfo.user.name}</h3>
          <h3 className="photo-list__user-location">{`${photoInfo.location.city}, ${photoInfo.location.country}`}</h3>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
