import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import estoreReducer from '../store/estoreSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    estore: estoreReducer,
  }
})