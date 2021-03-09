import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice';
import estoreReducer from '../store/estoreSlice';
import postsReducer from '../store/postsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    estore: estoreReducer,
    posts: postsReducer,
  }
})