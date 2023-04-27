import { createAction, createSlice } from '@reduxjs/toolkit';

export const initApp = createAction('app/initApp');

const initialState = {
    avatar_url: '',
    login: '',
    name: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAvatarUrl: (state, action) => ({ ...state, avatar: action.payload }),
        setLogin: (state, action) => ({ ...state, login: action.payload }),
        setName: (state, action) => ({ ...state, name: action.payload }),
        setUser: (state, action) => ({ ...state, ...action.payload }),
        reset: state => initialState
    }
});

export const { setAvatarUrl, setLogin, setName, setUser, reset } = userSlice.actions;

// selectors:
export const getAvatarUrl = state => state.user.avatar_url;
export const getLogin = state => state.user.login;
export const getName = state => state.user.name;

export default userSlice.reducer;