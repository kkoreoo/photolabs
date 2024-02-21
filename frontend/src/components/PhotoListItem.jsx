import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  /* Insert React */
  return(
    <section>
      <img src={props.sampleDataForPhotoListItem.imageSource}/>
      <img src={props.sampleDataForPhotoListItem.profile}/>
      <h3>{props.sampleDataForPhotoListItem.username}</h3>
      <h3>{`${props.sampleDataForPhotoListItem.location.city}, ${props.sampleDataForPhotoListItem.location.country}`}</h3>
    </section>
  );
};

export default PhotoListItem;
