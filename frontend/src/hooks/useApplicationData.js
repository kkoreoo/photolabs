import React from "react";
import { useReducer, useEffect } from "react";

const useApplicationData = () => {

  const initialState = {
    favPhotos: [],
    photoModal: null,
    photoData: [],
    topicData: [],
  }

  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SELECT_PHOTO: 'SELECT_PHOTO',
    CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  }

  // Fetches photodata from db
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
      type: ACTIONS.SET_PHOTO_DATA,
      payload: data
    })})
    .catch(error => console.log('Error', error));
  }, [])

  // Fetches topicData from db
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: ACTIONS.SET_TOPIC_DATA,
        payload: data
      })
    })
    .catch(error => console.log('Error', error));
  }, [])

  // action will be an object {type: "", payload: "what we want to add"}
  const reducer = (state, action) => {
    switch (action.type) {

      // Adds photo to favPhoto State
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favPhotos: [action.payload, ...state.favPhotos],
        }
  
      // Removes photo to favPhoto State
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favPhotos: state.favPhotos.filter(item => action.payload !== item),
        }

      // Opens selected photo to in modal
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          photoModal: action.payload,
        }

      // Closes modal of selected photo
      case ACTIONS.CLOSE_SELECT_PHOTO:
        return {
          ...state,
          photoModal: action.payload,
        }

      // Retrieval of data from db
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        }

      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload,
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