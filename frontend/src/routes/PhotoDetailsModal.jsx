import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';


import '../styles/PhotoList.scss';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const closeModal = () => {
    props.setPhotoModal();
  };

  const similarPhotos = Object.keys(props.photoModal.similar_photos).map((photo) => {
    const similarPhotoInfo = props.photoModal.similar_photos[photo];
    return <PhotoListItem key={similarPhotoInfo.id}
      photoInfo={similarPhotoInfo}
      isFavourited={props.favPhotos}
      toggleFavourite={props.toggleFavourite}
    />;
  });


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>

      <section className='photo-details-modal__container'>
        <PhotoFavButton isFavourited={props.favPhotos} toggleFavourite={() => props.toggleFavourite(props.photoModal)} />
        <img className='photo-details-modal__image' src={props.photoModal.urls.regular} />
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={props.photoModal.user.profile} />
          <div className='photo-details-modal__photographer-info'>
            <h3>{props.photoModal.user.name}</h3>
            <h3 className='photo-details-modal__photographer-location'>{props.photoModal.location.city}, {props.photoModal.location.country}</h3>
          </div>
        </div>
        <header className='photo-details-modal__header'>Similar Photos</header>
      </section>

      <section className='photo-details-modal__top-bar'>
        <ul className='photo-list photo-details-modal__images'>
          {similarPhotos}
        </ul>
      </section>

    </div>
  );
};

export default PhotoDetailsModal;
