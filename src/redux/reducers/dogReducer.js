import { dog } from "constants/ActionTypes";

/**
 * breeds - array
 * height - number
 * width - number
 * id - string
 * url - string (src of the image)
 */

const initialState = {
  fetchingDogs: false,
  dogsList: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    
    case dog.FETCH_DOGS_PENDING: {
      return {
        ...state,
        fetchingDogs: true,
      };
    }

    case dog.FETCH_DOGS_COMPLETED: {
      const { dogsList } = action.payload;
      return {
        ...state,
        fetchingDogs: false,
        dogsList,
      };
    }

    case dog.FETCH_DOGS_FAILED: {
      return {
        ...state,
        fetchingDogs: false,
      };
    }

    default:
      return state;
  }
}
