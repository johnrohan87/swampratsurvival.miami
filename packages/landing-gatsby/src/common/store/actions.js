import jsonPlaceholder from "../../apis/jsonPlaceholder";
import { dispatch } from 'react-redux';

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");
    
    const stateBefore = getState()
    console.log('payload before dispatch: ', stateBefore.payload)

    dispatch({ type: 'FETCH_POSTS', payload: response})
    console.dir(response)

    const stateAfter = getState()
    console.log('payload after dispatch: ', stateAfter.payload)
    
    return dispatch({ type: 'FETCH_POSTS', payload: response});
  };
};