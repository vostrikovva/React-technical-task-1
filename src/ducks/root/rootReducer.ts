import { combineReducers } from '@reduxjs/toolkit'

import { bookResultSlice } from '../bookingResult/slice'

const rootReducer = combineReducers({
  bookResult: bookResultSlice.reducer
})

export default rootReducer
