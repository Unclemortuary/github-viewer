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
    devTools: process.env.NODE_ENV === 'development'
});

export const URLS = {
    repositories: 'repositories',
    commits: 'commits'
};