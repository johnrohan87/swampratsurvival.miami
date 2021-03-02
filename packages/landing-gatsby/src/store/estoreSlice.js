import { createSlice } from '@reduxjs/toolkit'

export const estoreSlice = createSlice({
  name: 'estore',
  initialState: {
    data: "empty"
  },
  reducers: {
    add: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = "Updated Data"
    },
    remove: state => {
      state.data = "Removed Data"
    },
    append: (state, action) => {
      state = { ...state, estore: action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove, append } = estoreSlice.actions

export default estoreSlice.reducer