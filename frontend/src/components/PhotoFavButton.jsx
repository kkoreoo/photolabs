import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const clickHandler = () => {
    return (isFavourited ? setIsFavourited(false) : setIsFavourited(true));
  }
  
  const [isFavourited, setIsFavourited] = useState(false);

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} setIsFavourited={setIsFavourited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;