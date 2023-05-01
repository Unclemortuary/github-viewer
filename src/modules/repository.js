import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    selected: null
};

const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, data: [...state.data, ...action.payload] }),
        setSelectedRepository: (state, action) => ({ ...state, selected: action.payload })
    }
});

export const { setData, setSelectedRepository } = repositorySlice.actions;

// selectors:
export const getData = state => state.repository.data;
export const getSelectedRepository = state => state.repository.selected;

export default repositorySlice.reducer;