import { configureStore } from '@reduxjs/toolkit'
import personDataReducer from './slice/personDataSlice'

export const store = configureStore({
  reducer: {
    personalities: personDataReducer
  },
})
