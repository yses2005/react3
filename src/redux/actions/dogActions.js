import { dog } from "constants/ActionTypes";

import { default as fetchDogsAPI } from "utils/fetchDogs";

export function fetchDogs({page = 0,limit = 10, order = "ASC"} = {}){
    return async (dispatch) => {
        dispatch({
            type: dog.FETCH_DOG_PENDING,
        }); 

        const dogsList = await fetchDogsAPI({
            page,
            limit,
            order,
        });
        
        dispatch({
            type: dog.FETCH_DOG_COMPLETED,
            payload: {
                dogsList,
            },
        })
    };
}