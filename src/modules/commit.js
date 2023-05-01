import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: true
};

const commitSlice = createSlice({
    name: 'commit',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, data: action.payload }),
        setLoading: (state, action) => ({ ...state, loading: action.payload }),
        reset: state => initialState
    }
});

export const { setData, setSelectedRepoUrl, setLoading, reset } = commitSlice.actions;

// selectors:
export const getData = state => state.commit.data;
export const getLoading = state => state.commit.loading;

export default commitSlice.reducer;