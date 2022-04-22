import { dog } from "constants/ActionTypes"
import {default as fetchDogsAPI} from "utils/fetchDogs"
export function fetchDogs({page = 0,limit = 10} = {})
{
    return async dispatch =>
    {
        dispatch(
            {
                type:dog.FETCH_DOG_PENDING
            }
        )

        const responseJSON = await fetchDogsAPI(
            page,limit
        )
        console.log(responseJSON)
        dispatch(
            {
                type:dog.FETCH_DOG_COMPLETED,
                payload: {
                    dogsList:responseJSON
                }
            }
        )
    }
}

