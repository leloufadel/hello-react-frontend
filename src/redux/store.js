// // import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
