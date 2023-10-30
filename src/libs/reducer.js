import {combineReducers} from '@reduxjs/toolkit';

import movieSlice from './movieSlice';

export const rootReducer = combineReducers({
  movie: movieSlice,
});
