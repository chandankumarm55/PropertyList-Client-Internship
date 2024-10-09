import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProperties, addNewProperty, fetchPropertyById, updateProperty } from '../api/propertyApi';


export const fetchAllProperties = createAsyncThunk('properties/fetchAll', async() => {
    const properties = await fetchProperties();
    return properties;
});


export const addProperty = createAsyncThunk('properties/addNew', async(formData) => {
    const property = await addNewProperty(formData);
    return property;
});

export const getPropertyById = createAsyncThunk('properties/fetchById', async(id) => {
    const property = await fetchPropertyById(id);
    return property;
});


export const modifyProperty = createAsyncThunk('properties/update', async({ id, formData }) => {
    const updatedProperty = await updateProperty(id, formData);
    return updatedProperty;
});

const initialState = {
    properties: [],
    currentProperty: null,
    loading: false,
    error: null,
};

const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProperties.fulfilled, (state, action) => {
                state.properties = action.payload;
            })
            .addCase(addProperty.fulfilled, (state, action) => {
                state.properties.push(action.payload);
            })
            .addCase(getPropertyById.fulfilled, (state, action) => {
                state.currentProperty = action.payload;
            })
            .addCase(modifyProperty.fulfilled, (state, action) => {
                const index = state.properties.findIndex((prop) => prop._id === action.payload._id);
                if (index !== -1) {
                    state.properties[index] = action.payload;
                }
            });
    },
});

export default propertySlice.reducer;