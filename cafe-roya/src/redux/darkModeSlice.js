// src/redux/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    darkMode: localStorage.getItem('darkMode') === 'true' || false, // Retrieve from local storage
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode); // Save preference to local storage
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
