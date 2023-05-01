import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    selected: null,
    loading: false
};

const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, data: action.payload }),
        setSelectedRepository: (state, action) => ({ ...state, selected: action.payload }),
        setLoading: (state, action) => ({ ...state, loading: action.payload }),
        reset: state => initialState
    }
});

export const { setData, setSelectedRepository, setLoading, reset } = repositorySlice.actions;

// selectors:
export const getData = state => state.repository.data;
export const getSelectedRepository = state => state.repository.selected;
export const getLoading = state => state.repository.loading;

export default repositorySlice.reducer;