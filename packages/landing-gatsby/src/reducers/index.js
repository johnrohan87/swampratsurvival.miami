import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer
});

/*
const initialState = {
    UserData: [
        {id: 0, authData: 'Not Loged In'}
    ],
    shoppingCart: [
        {id: 0, item: 'empty'}
    ]
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
        case 'rootReducer': 
            return combineReducers({
                posts: postsReducer
            })
        case 'FETCH_POSTS':
            return action.payload;
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }
*/
