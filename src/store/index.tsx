import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { AdminReducer } from '../reducers/admin';

export const store = configureStore({
  reducer: {
    admin: AdminReducer,
  },
});

// Export Store states
export type RootState = ReturnType<typeof store.getState>;

// Store dispatch
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectAppState = (state: RootState) => state;
