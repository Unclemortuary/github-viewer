import { createAction, createSlice } from '@reduxjs/toolkit';

export const initApp = createAction('app/initApp');

const initialState = {
    avatar: '',
    login: '',
    name: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAvatar: (state, action) => ({ ...state, avatar: action.payload }),
        setLogin: (state, action) => ({ ...state, login: action.payload }),
        setName: (state, action) => ({ ...state, name: action.payload }),
        reset: state => initialState
    }
});

export const { setAvatar, setLogin, setName, reset } = userSlice.actions;

export default userSlice.reducer;