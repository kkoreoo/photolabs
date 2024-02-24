import React from "react";
import { useReducer } from "react";

const useApplicationData = () => {

  const initialState = {
    favPhotos: [],
    photoModal: null,
  }

  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SELECT_PHOTO: 'SELECT_PHOTO',
    CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
  }

  // action will be an object {type: "", payload: "what we want to add"}
  const reducer = (state, action) => {
    switch (action.type) {

      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favPhotos: [action.payload, ...state.favPhotos],
        }

      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favPhotos: state.favPhotos.filter(item => action.payload !== item),
        }

      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          photoModal: action.payload,
        }

      case ACTIONS.CLOSE_SELECT_PHOTO:
        return {
          ...state,
          photoModal: action.paylod,
        }

      default: 
        throw new Error(`Not an appropriate action, try something else`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  const toggleFavourite = (photo) => {
    const isFavourited = state.favPhotos.find((ph) => ph.id === photo.id);
    console.log(isFavourited);

    if (isFavourited) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: photo,
      });
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: photo,
      });
    }
  };


  const toggleModalForSelectedPhoto = (photo) => {
    
    if(!photo) {
      dispatch({
        type: ACTIONS.CLOSE_SELECT_PHOTO,
        payload: null,
      })
    } else {
      dispatch({
        type: ACTIONS.SELECT_PHOTO,
        payload: photo,
      })
    }
  }


  return {state, toggleFavourite, toggleModalForSelectedPhoto}
};

export default useApplicationData;