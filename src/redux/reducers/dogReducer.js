import { dog } from "constants/ActionTypes"

const initialState = {
    fetchingDogs: false,
    dogsList:[]
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case dog.FETCH_DOG_PENDING: {
        return {
          ...state,
          fetchingDogs:true
        };
      }

      case dog.FETCH_DOG_COMPLETED: {
        const {dogsList} = action.payload
        return {
          ...state,
          fetchingDogs:false,
          dogsList
        };
      }

      case dog.FETCH_DOG_FAILED: {
        return {
          ...state,
          fetchingDogs:false
        };
      }
  
      default:
        return state;
    }
  }