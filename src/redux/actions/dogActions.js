import { dog } from "constants/ActionTypes";

import { default as fetchDogsAPI } from "utils/fetchDogs";

export function fetchDogs({page = 0,limit = 10,} = {}){
    return async (dispatch) => {
        dispatch({
            type: dog.FETCH_DOG_PENDING,
        }); 

        const dogsList = await fetchDogsAPI({
            page,
            limit,
        });
        
        dispatch({
            type: dog.FETCH_DOG_COMPLETED,
            payload: {
                dogsList,
            },
        })
    };
}