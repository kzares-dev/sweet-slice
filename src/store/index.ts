import { configureStore } from '@reduxjs/toolkit';
import useCaseReducer from './use-cases';
import { api } from '../services/base';

export const store = configureStore({
  reducer: {
    useCases: useCaseReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
