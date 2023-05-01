import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import repositoryReducer from './repository';
import commitReducer from './commit';

export const store = configureStore({
    reducer: {
        user: userReducer,
        repository: repositoryReducer,
        commit: commitReducer
    },
    // todo: dev mode only
    devTools: true
});

export const URLS = {
    profile: 'profile',
    repository: 'repository'
};