import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './propertySlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, propertyReducer);

export const store = configureStore({
    reducer: {
        properties: persistedReducer,
    },
});

export const persistor = persistStore(store);