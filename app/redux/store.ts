import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './features/callsSlice';

export const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
