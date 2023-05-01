import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
};

const commitSlice = createSlice({
    name: 'commit',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, data: [ ...state.data,  ...action.payload ] }),
        reset: state => initialState
    }
});

export const { setData, reset } = commitSlice.actions;

// selectors:
export const getData = state => state.commit.data;

export default commitSlice.reducer;