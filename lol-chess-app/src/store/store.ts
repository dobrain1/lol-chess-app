import { configureStore } from '@reduxjs/toolkit';
import championBuilderReducer from '../slices/championBuilderSlice.ts';

export const store = configureStore({
  reducer: {
    championBuilder: championBuilderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
