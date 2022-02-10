import { dog } from "constants/ActionTypes";

import { default as fetchDogsAPI } from "utils/fetchDogs";

export function fetchDogs({ page = 0, limit = 10 } = {}) {
  return async (dispatch) => {
    dispatch({
      type: dog.FETCH_DOGS_PENDING,
    });

    const dogsList = await fetchDogsAPI({
      page,
      limit,
    });   

    dispatch({
      type: dog.FETCH_DOGS_COMPLETED,
      payload: { 
        dogsList,
       }
    })
  };
}
