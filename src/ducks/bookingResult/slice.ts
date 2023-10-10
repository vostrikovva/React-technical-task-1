import { createSlice } from '@reduxjs/toolkit'

import BookResult from '../../models/BookResult'

const name = '@@bookingResult'

const initialState: BookResult & { edited: boolean } = {
  createdAt: '',
  date: '',
  doctor: {
    id: '',
    name: ''
  },
  edited: false
}

export const bookResultSlice = createSlice({
  name,
  initialState,
  reducers: {
    onBooked: (state, { payload: data }) => {
      state.createdAt = data.createdAt
      state.date = data.date
      state.doctor = data.doctor
      state.edited = true
    }
  }
})

export const { actions, reducer } = bookResultSlice
