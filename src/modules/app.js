import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    // todo: dev mode only
    devTools: true
});

export const URLS = {
    profile: 'profile',
    repository: 'repository'
};